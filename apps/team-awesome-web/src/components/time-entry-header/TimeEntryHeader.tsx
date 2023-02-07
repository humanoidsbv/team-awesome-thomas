import * as Styled from "./TimeEntryHeader.styled";

interface EntryProps {
  startDate: string;
  endDate: string;
}

export const TimeEntryHeader = ({ startDate, endDate }: EntryProps) => {
  const entryDate = new Date(startDate);
  const entryDateString = entryDate.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "numeric",
  });
  const entryTimeString = entryDate.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <Styled.TimeEntryHeader>
      <h2>{entryDateString}</h2>
      <Styled.Time>{entryTimeString}</Styled.Time>
    </Styled.TimeEntryHeader>
  );
};
