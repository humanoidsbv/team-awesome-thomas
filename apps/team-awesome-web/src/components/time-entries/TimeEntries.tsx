import * as Styled from "./TimeEntries.styled";
import { useState } from "react";
import { TimeEntry } from "../time-entry/";
import { TimeEntryHeader } from "../time-entry-header/";
import { Button } from "../button/";
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

  return (
    <Styled.TimeEntries>
      {timeEntries.map((timeEntry) => (
        <>
          <TimeEntryHeader startDate={timeEntry.startTimestamp} endDate={timeEntry.stopTimestamp} />
          <TimeEntry
            key={timeEntry.id}
            client={timeEntry.client}
            startDate={timeEntry.startTimestamp}
            endDate={timeEntry.stopTimestamp}
          />
        </>
      ))}
      <Button onClick={handleClick}>Add time entry</Button>
    </Styled.TimeEntries>
  );
};
