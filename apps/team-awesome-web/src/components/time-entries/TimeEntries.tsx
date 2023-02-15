import React, { useState, useRef, FormEvent, useEffect } from "react";

import { Button } from "../button";
import { Modal } from "../modal";
import { NotFoundError, ServerError } from "../../classes/errors";
import { ReactComponent as PlusIcon } from "../../../public/icons/plus-icon.svg";
import { SubHeader } from "../sub-header";
import { TimeEntry } from "../time-entry";
import { TimeEntryForm } from "../forms/time-entry-form";
import { TimeEntryHeader } from "../time-entry-header";
import * as Styled from "./TimeEntries.styled";
import * as SubheaderStyles from "../sub-header/SubHeader.styled";
import * as Types from "../../types";
import { getTimeEntries } from "../../services/getTimeEntries";

export const TimeEntries = () => {
  // External handling
  const baseUrl = "http://localhost:3004";

  const [timeEntries, setTimeEntries] = useState<Types.TimeEntry[]>([]);

  const fetchTimeEntries = async () => {
    const fetchedTimeEntries = await getTimeEntries(`${baseUrl}/time-entries`);
    if (fetchedTimeEntries instanceof NotFoundError) {
      console.log("The time entries could not be found.");
      return;
    }
    if (fetchedTimeEntries instanceof ServerError) {
      console.log("The server is not responding appropriately.");
      return;
    }
    setTimeEntries(fetchedTimeEntries);
  };

  useEffect(() => {
    fetchTimeEntries();
  }, []);

  // Local handling
  const defaultEntry = {
    client: "",
    date: "1970-01-01",
    from: "00:00",
    id: 0,
    startTimestamp: "2022-09-26T16:00:00.000Z",
    stopTimestamp: "2022-09-26T18:00:00.000Z",
    to: "00:00",
    activity: "",
  };

  const postTimeEntry = async (endpoint: string, data: string): Promise<Types.TimeEntry> => {
    return fetch(`${baseUrl}/time-entries`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    })
      .then((response) => {
        if (response.status === 404) {
          throw new Error();
        }
        return response;
      })
      .then((response) => response.json())
      .catch((error) => error);
  };

  const [newTimeEntry, setNewTimeEntry] = useState<Types.TimeEntry>(defaultEntry);

  const [isModalActive, setIsModalActive] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setNewTimeEntry({ ...newTimeEntry, [target.name]: target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formRef.current?.checkValidity()) {
      const response = await postTimeEntry(`${baseUrl}/time-entries`, JSON.stringify(newTimeEntry));

      if (response instanceof Error) {
        console.log("Something went wrong.");
        return;
      }
      setTimeEntries([...timeEntries, response]);
      setIsModalActive(false);
      setNewTimeEntry(defaultEntry);
    }
  };

  return (
    <>
      <SubHeader>
        <SubheaderStyles.ContextMenu>
          <SubheaderStyles.ContextHeading>Timesheets</SubheaderStyles.ContextHeading>
          <SubheaderStyles.ContextIndicator>
            {timeEntries.length} Entr{timeEntries.length > 1 ? "ies" : "y"}
          </SubheaderStyles.ContextIndicator>
        </SubheaderStyles.ContextMenu>
        <Button onClick={() => setIsModalActive(true)}>
          <PlusIcon />
          New time entry
        </Button>
      </SubHeader>
      <Styled.TimeEntries>
        {timeEntries.map((timeEntry) => (
          <React.Fragment key={timeEntry.id}>
            <TimeEntryHeader
              endDate={timeEntry.stopTimestamp}
              startDate={timeEntry.startTimestamp}
            />
            <TimeEntry
              key={timeEntry.id}
              client={timeEntry.client}
              startDate={timeEntry.startTimestamp}
              endDate={timeEntry.stopTimestamp}
            />
          </React.Fragment>
        ))}

        <Modal
          isActive={isModalActive}
          onClose={() => {
            setIsModalActive(false);
            setNewTimeEntry(defaultEntry);
          }}
          title="New time entry"
        >
          <TimeEntryForm
            handleClose={() => {
              setIsModalActive(false);
              setNewTimeEntry(defaultEntry);
            }}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            newTimeEntry={newTimeEntry}
            formRef={formRef}
          />
        </Modal>
      </Styled.TimeEntries>
    </>
  );
};
