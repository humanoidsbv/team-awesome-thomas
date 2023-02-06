import * as Styled from "./TimeEntry.styled";

export const TimeEntry = () => {
  return (
    <Styled.TimeEntry>
      <Styled.Location>Port of Rotterdam</Styled.Location>
      <Styled.Times>
        <Styled.TimeRange>09:00 - 17:00</Styled.TimeRange>
        <Styled.Duration>08:00</Styled.Duration>
      </Styled.Times>
      <Styled.DeleteIcon />
    </Styled.TimeEntry>
  );
};
