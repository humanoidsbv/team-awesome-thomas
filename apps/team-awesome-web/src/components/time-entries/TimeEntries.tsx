import * as Styled from "./TimeEntries.styled";
import { Button } from "../button/";
import { Input } from "../forms/input/";
import { Modal } from "../modal/";
import { TimeEntryForm } from "../forms/time-entry-form";
import { SubHeader } from "../sub-header";
import { TimeEntry } from "../time-entry/";
import { TimeEntryHeader } from "../time-entry-header/";
import React, { useState } from "react";
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
    id: 0,
    client: "",
    startTimestamp: "2022-09-26T16:00:00.000Z",
    stopTimestamp: "2022-09-26T18:00:00.000Z",
    date: "1970-01-01",
    from: "00:00",
    to: "00:00",
  };

  const [isModalActive, setIsModalActive] = useState(false);

  const [newTimeEntry, setNewTimeEntry] = useState<Types.TimeEntry>(defaultEntry);

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setNewTimeEntry({ ...newTimeEntry, [target.name]: target.value });
    // const dateToISOString = (dateTime: Date) => {
    //   console.log(dateTime);
    //   dateTime.toISOString();
    // };
    const startDateTime = new Date(`${[newTimeEntry.date]} ${newTimeEntry.to}`);
    const stopDateTime = new Date(`${[newTimeEntry.date]} ${newTimeEntry.from}`);

    console.log(newTimeEntry);
    // setNewTimeEntry({
    //   ...newTimeEntry,
    //   [newTimeEntry.startTimestamp]: dateToISOString(startDateTime),
    //   [newTimeEntry.stopTimestamp]: dateToISOString(stopDateTime),
    // });
    // console.log(newTimeEntry);
  };

  function handleSubmit() {
    setIsModalActive(false);
    const startTimeString = dateToISOString(newTimeEntry.to, newTimeEntry.date);
    console.log(newTimeEntry);
    console.log(startTimeString);

    handleClick(newTimeEntry);

    setNewTimeEntry(defaultEntry);
  }

  return (
    <>
      <SubHeader onClick={() => setIsModalActive(true)} />
      <Styled.TimeEntries>
        {timeEntries.map((timeEntry) => (
          <React.Fragment key={timeEntry.id}>
            <TimeEntryHeader
              startDate={timeEntry.startTimestamp}
              endDate={timeEntry.stopTimestamp}
            />
            <TimeEntry
              key={timeEntry.id}
              client={timeEntry.client}
              startDate={timeEntry.startTimestamp}
              endDate={timeEntry.stopTimestamp}
            />
          </React.Fragment>
        ))}

        <Button onClick={() => handleClick(newTimeEntry)}>Add time entry</Button>
        <Modal
          isActive={isModalActive}
          onClose={() => {
            setIsModalActive(false);
            setNewTimeEntry(defaultEntry);
          }}
          title="New time entry"
        >
          <TimeEntryForm handleChange={handleChange} newTimeEntry={newTimeEntry} />
          <Button onClick={handleSubmit}>Submit</Button>
        </Modal>
      </Styled.TimeEntries>
    </>
  );
};
