import * as Styled from "./TimeEntry.styled";
import { ReactComponent as Bin } from "../../../public/icons/bin.svg";
import * as Types from "../../types";

import { calcDuration } from "../../services/calculate-duration";

interface EntryProps {
  timeEntry: Types.TimeEntry;
  onDelete: (toRemove: number) => void;
}

export const TimeEntry = ({ timeEntry, onDelete }: EntryProps) => {
  const dateStart = new Date(timeEntry.startTimestamp);
  const dateEnd = new Date(timeEntry.stopTimestamp);

  const dateTimestamp = (inputDate: Date) =>
    inputDate.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });

  const durationString = calcDuration(timeEntry);

  return (
    <Styled.TimeEntry>
      <div>{timeEntry.client}</div>
      <Styled.Times>
        <Styled.TimeRange>
          {dateTimestamp(dateStart)} - {dateTimestamp(dateEnd)}
        </Styled.TimeRange>
        <Styled.Duration>{durationString}</Styled.Duration>
      </Styled.Times>
      <Styled.DeleteIcon onClick={onDelete}>
        <Bin />
      </Styled.DeleteIcon>
    </Styled.TimeEntry>
  );
};
