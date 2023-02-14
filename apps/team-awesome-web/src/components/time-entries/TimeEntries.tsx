import * as Styled from "./TimeEntries.styled";
import { Button } from "../button/";
import { Modal } from "../modal/";
import { TimeEntryForm } from "../forms/time-entry-form";
import { SubHeader } from "../sub-header";
import { TimeEntry } from "../time-entry/";
import { TimeEntryHeader } from "../time-entry-header/";
import React, { useState, useRef, FormEvent } from "react";
import * as Types from "../../types";
import mockTimeEntries from "../../fixtures/mock-time-entries";

export const TimeEntries = () => {
  const [timeEntries, setTimeEntries] = useState<Types.TimeEntry[]>(mockTimeEntries || []);
  const handleClick = (input: Types.TimeEntry) => {
    setTimeEntries([
      ...timeEntries,
      {
        id: Math.random() + 2,
        client: input.client ?? defaultEntry.client,
        startTimestamp: input.startTimestamp || defaultEntry.startTimestamp,
        stopTimestamp: input.stopTimestamp || defaultEntry.stopTimestamp,
      },
    ]);
  };

  const defaultEntry = {
    client: "",
    date: "1970-01-01",
    from: "00:00",
    id: 0,
    startTimestamp: "2022-09-26T16:00:00.000Z",
    stopTimestamp: "2022-09-26T18:00:00.000Z",
    to: "00:00",
  };

  const [isModalActive, setIsModalActive] = useState(false);

  const [newTimeEntry, setNewTimeEntry] = useState<Types.TimeEntry>(defaultEntry);

  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setNewTimeEntry({ ...newTimeEntry, [target.name]: target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    if (formRef.current?.checkValidity()) {
      console.log(formRef.current?.checkValidity());
      setIsModalActive(false);
      handleClick(newTimeEntry);
      setNewTimeEntry(defaultEntry);
    }
  };

  return (
    <>
      <SubHeader onClick={() => setIsModalActive(true)} />
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
