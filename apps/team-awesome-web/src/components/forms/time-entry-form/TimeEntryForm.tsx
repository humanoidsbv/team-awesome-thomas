import { ChangeEvent, FormEvent, RefObject } from "react";

import { Button } from "../../button";
import { Input } from "../input";
import * as Styled from "./TimeEntryForm.styled";
import * as Types from "../../../types";

interface FormProps {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleClose: () => void;
  newTimeEntry: Types.TimeEntry;
  formRef: RefObject<HTMLFormElement>;
}

export const TimeEntryForm = ({
  handleSubmit,
  handleChange,
  handleClose,
  newTimeEntry,
  formRef,
}: FormProps) => {
  const durationString =
    new Date(newTimeEntry.stopTimestamp).getTime() -
    new Date(newTimeEntry.startTimestamp).getTime();

  const duration = new Date(durationString - 3600000).toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <Styled.TimeEntryForm ref={formRef} onSubmit={handleSubmit}>
      <Input
        column="full"
        errorMessage="Please fill in a valid name"
        label="Client"
        minLength={4}
        name="client"
        onChange={handleChange}
        placeholder="Client name"
        required
        type="text"
        value={newTimeEntry.client ?? ""}
      />
      <Input
        column="full"
        errorMessage="Please fill in a valid activity description"
        label="Activity"
        minLength={4}
        name="activity"
        onChange={handleChange}
        placeholder="Activity description"
        required
        type="text"
        value={newTimeEntry.activity ?? ""}
      />
      <Input
        column="3"
        errorMessage="Please enter a valid date"
        label="Date"
        name="date"
        onChange={handleChange}
        placeholder="1970-01-01"
        required
        type="date"
        value={newTimeEntry.date ?? "1970-01-01"}
      />
      <Input
        errorMessage="Please enter a valid time"
        label="From"
        name="from"
        onChange={handleChange}
        placeholder="00:00"
        required
        type="time"
        value={newTimeEntry.from ?? "00:00"}
      />
      <Input
        errorMessage="Please enter a valid time"
        label="To"
        name="to"
        onChange={handleChange}
        placeholder="00:00"
        required
        type="time"
        value={newTimeEntry.to ?? "00:00"}
      />
      <Styled.TimeWrapper>
        <Styled.TimeLabel>Total</Styled.TimeLabel>
        <Styled.Time>{duration}</Styled.Time>
      </Styled.TimeWrapper>
      <Styled.FormActions>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button disabled={!formRef.current?.checkValidity()} type="submit">
          Submit
        </Button>
      </Styled.FormActions>
    </Styled.TimeEntryForm>
  );
};
