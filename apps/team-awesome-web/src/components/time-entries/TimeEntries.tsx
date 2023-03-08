import React, { FormEvent, useEffect, useRef, useContext, useState } from "react";

import { useMutation, useQuery } from "@apollo/client";
import { Button } from "../button";
import { Filter } from "../forms/filter";
import { Modal } from "../modal";
import { ReactComponent as PlusIcon } from "../../../public/icons/plus-icon.svg";
import { Select } from "../forms/select";
import { StoreContext } from "../store-context";
import { SubHeader } from "../sub-header";
import { TimeEntry } from "../time-entry";
import { TimeEntryForm } from "../forms/time-entry-form";
import { TimeEntryHeader } from "../time-entry-header";
import * as Styled from "./TimeEntries.styled";
import * as Types from "../../types";
import { GET_TIME_ENTRIES } from "../../graphql/time-entries/queries";
import { ADD_TIME_ENTRY, DELETE_TIME_ENTRY } from "../../graphql/time-entries/mutations";

const title = "Timesheets";

const defaultEntry = {
  client: "",
  date: "1970-01-01",
  from: "00:00",
  id: 0,
  startTimestamp: "2022-09-26T16:00:00.000Z",
  stopTimestamp: "2022-09-26T18:00:00.000Z",
  to: "00:00",
  activity: "",
};

interface TimeEntriesProps {
  errorMessage?: string;
  timeEntries: Types.TimeEntry[];
}

export const TimeEntries = ({ ...props }: TimeEntriesProps) => {
  const { timeEntries, setTimeEntries } = useContext(StoreContext);

  const { loading: timeEntryLoad, data: timeEntryData } = useQuery(GET_TIME_ENTRIES, {
    pollInterval: 5000,
  });

  if (!timeEntryLoad) {
    const { allTimeEntries = {} } = timeEntryData;
    setTimeEntries(allTimeEntries);
  }

  const [sortedTimeEntries, setSortedTimeEntries] = useState(timeEntries);

  // useEffect(() => {
  //   setSortedTimeEntries(timeEntries);
  // }, [timeEntries]);

  const subheaderCount = `${timeEntries.length} Entr${timeEntries.length > 1 ? "ies" : "y"}`;

  const [newTimeEntry, setNewTimeEntry] = useState<Types.TimeEntry>(defaultEntry);

  const [, setErrorMessages] = useState<string[]>(props.errorMessage ? [props.errorMessage] : []);

  const [isModalActive, setIsModalActive] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const [removeTimeEntries] = useMutation(DELETE_TIME_ENTRY);

  const handleRemoval = async (id: number) => {
    removeTimeEntries({ variables: { id } });
  };

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (target.name === "from") {
      const newStartTimestamp = new Date(`${newTimeEntry.date}T${target.value}:00`);
      setNewTimeEntry({ ...newTimeEntry, startTimestamp: newStartTimestamp.toISOString() });
      return;
    }
    if (target.name === "to") {
      const newStopTimestamp = new Date(`${newTimeEntry.date}T${target.value}`);
      setNewTimeEntry({ ...newTimeEntry, stopTimestamp: newStopTimestamp.toISOString() });
      return;
    }
    setNewTimeEntry({ ...newTimeEntry, [target.name]: target.value });
  };

  const [addNewTimeEntry] = useMutation(ADD_TIME_ENTRY);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current?.checkValidity()) {
      addNewTimeEntry({ variables: { ...newTimeEntry } });
      setIsModalActive(false);
      setNewTimeEntry(defaultEntry);
      setErrorMessages([]);
    }
  };

  useEffect(() => {
    setTimeEntries(props.timeEntries);
  }, []);

  useEffect(() => {
    setSortedTimeEntries(timeEntries);
  }, [timeEntries]);

  return (
    <>
      <SubHeader count={subheaderCount} title={title}>
        <Button onClick={() => setIsModalActive(true)}>
          <PlusIcon />
          New time entry
        </Button>
      </SubHeader>
      <Styled.TimeEntries>
        <Styled.Actions>
          <Filter filterArray={timeEntries} setFilteredResults={setSortedTimeEntries} />
          <Select
            setSortedResults={setSortedTimeEntries}
            sortArray={sortedTimeEntries}
            sortList="timesheets"
            direction
          />
        </Styled.Actions>
        {sortedTimeEntries.map((timeEntry) => (
          <React.Fragment key={timeEntry.id}>
            <TimeEntryHeader
              endDate={timeEntry.stopTimestamp}
              key={timeEntry.id}
              startDate={timeEntry.startTimestamp}
            />
            <TimeEntry timeEntry={timeEntry} onDelete={() => handleRemoval(timeEntry.id)} />
          </React.Fragment>
        ))}
      </Styled.TimeEntries>
      <Modal
        isActive={isModalActive}
        onClose={() => {
          setIsModalActive(false);
          setNewTimeEntry(defaultEntry);
        }}
        title="New time entry"
      >
        <TimeEntryForm
          formRef={formRef}
          handleChange={handleChange}
          handleClose={() => {
            setIsModalActive(false);
            setNewTimeEntry(defaultEntry);
          }}
          handleSubmit={handleSubmit}
          newTimeEntry={newTimeEntry}
        />
      </Modal>
    </>
  );
};
