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
  const handleClick = () => {
    setTimeEntries([
      ...timeEntries,
      {
        id: Math.random() + 2,
        client: "Port of R'dam",
        startTimestamp: "2022-09-26T16:00:00.000Z",
        stopTimestamp: "2022-09-26T18:00:00.000Z",
      },
    ]);
  };

  const [isModalActive, setIsModalActive] = useState(false);

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
          <p>Hi true believers🥸!</p>
        </Modal>
      </Styled.TimeEntries>
    </>
  );
};
