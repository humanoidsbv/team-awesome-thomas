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
      label="Client"
      name="client"
      onChange={handleChange}
      placeholder="Client name"
      type="text"
      value={newTimeEntry.client ?? ""}
      width="full"
    />
    <Input
      label="Activity"
      name="activity"
      onChange={handleChange}
      placeholder="Activity description"
      type="text"
      value={newTimeEntry.activity ?? ""}
      width="full"
    />
    <Input
      label="Date"
      name="date"
      onChange={handleChange}
      placeholder="1970-01-01"
      type="date"
      value={newTimeEntry.date ?? "1970-01-01"}
      width="3"
    />
    <Input
      label="From"
      name="from"
      onChange={handleChange}
      placeholder="00:00"
      type="time"
      value={newTimeEntry.from ?? "00:00"}
    />
    <Input
      label="To"
      name="to"
      onChange={handleChange}
      placeholder="00:00"
      type="time"
      value={newTimeEntry.to ?? "00:00"}
    />
  </Styled.TimeEntryForm>
);
