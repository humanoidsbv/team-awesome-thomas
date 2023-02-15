import * as Styled from "./TimeEntry.styled";

interface EntryProps {
  client: string;
  endDate: string;
  startDate: string;
}

export const TimeEntry = ({ client, endDate, startDate }: EntryProps) => {
  const dateStart = new Date(startDate);
  const dateEnd = new Date(endDate);

  const timeDuration = dateEnd.getTime() - dateStart.getTime();
  const durationString = `${`0${Math.floor(timeDuration / 1000 / 3600).toString()}`.slice(
    -2,
  )}:${`0${((timeDuration / 1000 / 60) % 60).toString()}`.slice(-2)}`;

  const dateTimestamp = (inputDate: Date) =>
    inputDate.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });

  return (
    <Styled.TimeEntry>
      <div>{client}</div>
      <Styled.Times>
        <Styled.TimeRange>
          {dateTimestamp(dateStart)} - {dateTimestamp(dateEnd)}
        </Styled.TimeRange>
        <Styled.Duration>{durationString}</Styled.Duration>
      </Styled.Times>
      <Styled.DeleteIcon />
    </Styled.TimeEntry>
  );
};
