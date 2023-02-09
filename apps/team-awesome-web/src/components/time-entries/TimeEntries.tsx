import * as Styled from "./TimeEntries.styled";
import { Button } from "../button/";
import { Input } from "../forms/input/";
import { Modal } from "../modal/";
import { SubHeader } from "../sub-header";
import { TimeEntry } from "../time-entry/";
import { TimeEntryHeader } from "../time-entry-header/";
import { useState } from "react";
import mockTimeEntries from "../../fixtures/mock-time-entries";

export const TimeEntries = () => {
  const [timeEntries, setTimeEntries] = useState(mockTimeEntries);
  const handleClick = (input: string) => {
    setTimeEntries([
      ...timeEntries,
      {
        id: Math.random() + 2,
        client: input,
        startTimestamp: "2022-09-26T16:00:00.000Z",
        stopTimestamp: "2022-09-26T18:00:00.000Z",
      },
    ]);
  };

  const [isModalActive, setIsModalActive] = useState(false);

  const [newTimeEntry, setNewTimeEntry] = useState({} as Types.TimeEntry);

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setNewTimeEntry({ ...newTimeEntry, [target.name]: target.value });
  };

  function handleSubmit() {
    console.log(newTimeEntry);
    setIsModalActive(false);
    handleClick(newTimeEntry.client);
    setNewTimeEntry({});
  }

  return (
    <>
      <SubHeader onClick={() => setIsModalActive(true)} />
      <Styled.TimeEntries>
        {timeEntries.map((timeEntry) => (
          <>
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
          </>
        ))}

        <Button onClick={handleClick}>Add time entry</Button>
        <Modal
          isActive={isModalActive}
          onClose={() => setIsModalActive(false)}
          title="New time entry"
        >
          <Input
            label="Client"
            name="client"
            onChange={handleChange}
            placeholder="Client name"
            type="text"
            value={newTimeEntry.client ?? ""}
          />
          <Input
            label="Activity"
            name="activity"
            placeholder="Activity description"
            type="text"
            value={newTimeEntry.activity ?? ""}
          />
          <Button onClick={handleSubmit}>Submit lol</Button>
        </Modal>
      </Styled.TimeEntries>
    </>
  );
};
