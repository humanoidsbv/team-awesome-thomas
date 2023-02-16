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
import { getTimeEntries, postTimeEntry, deleteTimeEntry } from "../../services";

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

interface TimeEntriesProps {
  initTimeEntries: Types.TimeEntry[];
}

export const TimeEntries = ({ initTimeEntries }: TimeEntriesProps) => {
  const baseUrl = "http://localhost:3004";

  const [timeEntries, setTimeEntries] = useState<Types.TimeEntry[]>(initTimeEntries);

  const [newTimeEntry, setNewTimeEntry] = useState<Types.TimeEntry>(defaultEntry);

  const [errorMessages, setErrorMessages] = useState<string[]>([]);

  const [isModalActive, setIsModalActive] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const fetchTimeEntries = async () => {
    const fetchedTimeEntries = await getTimeEntries(`${baseUrl}/time-entries`);
    if (fetchedTimeEntries instanceof NotFoundError) {
      setErrorMessages([...errorMessages, "The time entries could not be found."]);
      return;
    }
    if (fetchedTimeEntries instanceof ServerError) {
      console.error("The server is not responding appropriately.");
      return;
    }
    setTimeEntries(fetchedTimeEntries);
  };

  const handleRemoval = async (id: number) => {
    const request = await deleteTimeEntry(`${baseUrl}/time-entries`, id);
    if (request instanceof Error) {
      console.warn(`Deletion of entry with id ${id} failed.`);
      return;
    }
    setTimeEntries(timeEntries.filter((timeEntry) => timeEntry.id !== id));
  };

  useEffect(() => {
    fetchTimeEntries();
  }, []);

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setNewTimeEntry({ ...newTimeEntry, [target.name]: target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formRef.current?.checkValidity()) {
      const response = await postTimeEntry(`${baseUrl}/time-entries`, JSON.stringify(newTimeEntry));

      if (response instanceof Error) {
        console.error("Something went wrong.");
        return;
      }
      setTimeEntries([...timeEntries, response]);
      setIsModalActive(false);
      setNewTimeEntry(defaultEntry);
      setErrorMessages([]);
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
      {errorMessages?.map((m) => (
        <span>{m}</span>
      ))}
      <Styled.TimeEntries>
        {timeEntries.map((timeEntry, index) => (
          <React.Fragment key={timeEntry.id}>
            <TimeEntryHeader
              endDate={timeEntry.stopTimestamp}
              startDate={timeEntry.startTimestamp}
            />
            <TimeEntry
              client={timeEntry.client}
              startDate={timeEntry.startTimestamp}
              endDate={timeEntry.stopTimestamp}
              onDelete={() => handleRemoval(timeEntry.id)}
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
