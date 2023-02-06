import * as Styled from "./TimeEntry.styled";
import { useState, ReactNode } from "react";

interface EntryProps {
  client: string;
  endDate: string;
  key: number;
  startDate: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const TimeEntry = ({ key, client, endDate, startDate }: EntryProps) => {
  const dateStart = new Date(startDate);
  const dateEnd = new Date(endDate);
  const timeDuration = dateEnd.getTime() - dateStart.getTime();
  const durationString = `${Math.floor(timeDuration / 1000 / 3600)}:${(
    "0" + ((timeDuration / 1000 / 60) % 60).toString()
  ).slice(-2)}`;
  const entryTimeStartString = dateStart.toLocaleTimeString("nl-NL", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const entryTimeEndString = dateEnd.toLocaleTimeString("nl-NL", {
    hour: "2-digit",
    minute: "2-digit",
  });

  console.log(Math.floor(timeDuration / 1000 / 60 / 60));
  return (
    <Styled.TimeEntry>
      <div>{client}</div>
      <Styled.Times>
        <Styled.TimeRange>
          {entryTimeStartString} - {entryTimeEndString}
        </Styled.TimeRange>
        <Styled.Duration>{durationString}</Styled.Duration>
      </Styled.Times>
      <Styled.DeleteIcon />
    </Styled.TimeEntry>
  );
};
