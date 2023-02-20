import * as Styled from "./TimeEntry.styled";
import { ReactComponent as Bin } from "../../../public/icons/bin.svg";
import * as Types from "../../types";

import { calcDuration } from "../../services/calculate-duration";

interface EntryProps {
  object: Types.TimeEntry;
  onDelete: (toRemove: number) => void;
}

export const TimeEntry = ({ object, onDelete }: EntryProps) => {
  const dateStart = new Date(object.startTimestamp);
  const dateEnd = new Date(object.stopTimestamp);

  const dateTimestamp = (inputDate: Date) =>
    inputDate.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });

  return (
    <Styled.TimeEntry>
      <div>{object.client}</div>
      <Styled.Times>
        <Styled.TimeRange>
          {dateTimestamp(dateStart)} - {dateTimestamp(dateEnd)}
        </Styled.TimeRange>
        <Styled.Duration>{calcDuration(object)}</Styled.Duration>
      </Styled.Times>
      <Styled.DeleteIcon onClick={onDelete}>
        <Bin />
      </Styled.DeleteIcon>
    </Styled.TimeEntry>
  );
};
