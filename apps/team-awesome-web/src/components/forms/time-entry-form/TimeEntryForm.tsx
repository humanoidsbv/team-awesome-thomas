import * as Styled from "./TimeEntryForm.styled";
import { useState, ReactNode } from "react";
import * as Types from "../../../types";
import { Input } from "../input";

interface FormProps {
  children?: ReactNode;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  newTimeEntry: Types.TimeEntry;
}

export const TimeEntryForm = ({ handleChange, newTimeEntry }: FormProps) => (
  <Styled.TimeEntryForm>
    <Input
      width="full"
      label="Client"
      name="client"
      onChange={handleChange}
      placeholder="Client name"
      value={newTimeEntry.client ?? ""}
      type="text"
    />
    <Input
      width="full"
      label="Activity"
      name="activity"
      placeholder="Activity description"
      type="text"
      onChange={handleChange}
      value={newTimeEntry.activity ?? ""}
    />
    <Input
      width="3"
      label="Date"
      name="date"
      placeholder="1970-01-01"
      type="date"
      value={newTimeEntry.date ?? "1970-01-01"}
      onChange={handleChange}
    />
    <Input
      label="From"
      name="from"
      placeholder="00:00"
      type="time"
      value={newTimeEntry.from ?? "00:00"}
      onChange={handleChange}
    />
    <Input
      label="To"
      name="to"
      placeholder="00:00"
      type="time"
      value={newTimeEntry.to ?? "00:00"}
      onChange={handleChange}
    />
  </Styled.TimeEntryForm>
);
