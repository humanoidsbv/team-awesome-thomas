import React, { useState, useRef, FormEvent } from "react";

import { Button } from "../button";
import { postTimeEntry, deleteTimeEntry } from "../../services";
import { Modal } from "../modal";
import { ReactComponent as PlusIcon } from "../../../public/icons/plus-icon.svg";
import { SubHeader } from "../sub-header";
import { TimeEntry } from "../time-entry";
import { TimeEntryForm } from "../forms/time-entry-form";
import { TimeEntryHeader } from "../time-entry-header";
import * as Styled from "./TimeEntries.styled";
import * as SubheaderStyles from "../sub-header/SubHeader.styled";
import * as Types from "../../types";

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
  timeEntries: Types.TimeEntry[];
  errorMessage?: string;
}

export const TimeEntries = ({ ...props }: TimeEntriesProps) => {
  const [timeEntries, setTimeEntries] = useState<Types.TimeEntry[]>(props.timeEntries);

  const [newTimeEntry, setNewTimeEntry] = useState<Types.TimeEntry>(defaultEntry);

  const [errorMessages, setErrorMessages] = useState<string[]>(
    props.errorMessage ? [props.errorMessage] : [],
  );

  const [isModalActive, setIsModalActive] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const handleRemoval = async (id: number) => {
    const request = await deleteTimeEntry(id);

    if (request instanceof Error) {
      console.warn(`Deletion of entry with id ${id} failed.`);
      return;
    }
    setTimeEntries(timeEntries.filter((timeEntry) => timeEntry.id !== id));
  };

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setNewTimeEntry({ ...newTimeEntry, [target.name]: target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current?.checkValidity()) {
      const response = await postTimeEntry(JSON.stringify(newTimeEntry));

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

      <Styled.TimeEntries>
        {timeEntries.map((timeEntry) => (
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
      </Styled.TimeEntries>
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
    </>
  );
};
