import * as Styled from "./TimeEntries.styled";
import { TimeEntry } from "../time-entry/";
import { TimeEntryHeader } from "../time-entry-header/";

export const TimeEntries = () => (
  <Styled.TimeEntries>
    <TimeEntryHeader />
    <TimeEntry />
    <TimeEntryHeader />
    <TimeEntry />
    <TimeEntry />
  </Styled.TimeEntries>
);
