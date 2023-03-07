import React, {
  FormEvent,
  useEffect,
  useRef,
  useContext,
  useState,
  SetStateAction,
  Dispatch,
} from "react";

import { Button } from "../button";
import { deleteTimeEntry, postTimeEntry } from "../../services";
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

export const TimeEntries = ({ errorMessage, ...props }: TimeEntriesProps) => {
  const { timeEntries, setTimeEntries } = useContext(StoreContext);

  const [sortedTimeEntries, setSortedTimeEntries] = useState<Types.TimeEntry[]>(props.timeEntries);

  const subheaderCount = `${sortedTimeEntries.length} Entr${
    sortedTimeEntries.length > 1 ? "ies" : "y"
  }`;

  const [newTimeEntry, setNewTimeEntry] = useState<Types.TimeEntry>(defaultEntry);

  const [, setErrorMessages] = useState<string[]>(errorMessage ? [errorMessage] : []);

  const [isModalActive, setIsModalActive] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const handleRemoval = async (id: number) => {
    const response = await deleteTimeEntry(id);

    if (response instanceof Error) {
      console.warn(`Deletion of entry with id ${id} failed.`);
      return;
    }
    setTimeEntries(timeEntries.filter((timeEntry) => timeEntry.id !== id));
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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current?.checkValidity()) {
      const response = await postTimeEntry(JSON.stringify(newTimeEntry));

      if (response instanceof Error) {
        console.error("Something went wrong.");
        return;
      }
      setTimeEntries([...timeEntries, response]);
      setIsModalActive(false);
      setNewTimeEntry(defaultEntry);
      setErrorMessages([]);
    }
  };

  // Inital load
  useEffect(() => {
    setTimeEntries(props.timeEntries);
  }, []);

  // Sorted list rerender
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
          <Filter
            filterArray={timeEntries}
            setFilteredResults={
              setSortedTimeEntries as Dispatch<
                SetStateAction<Types.TimeEntry[] | Types.TeamMember[]>
              >
            }
          />
          <Select
            direction
            setSortedResults={
              setSortedTimeEntries as Dispatch<
                SetStateAction<Types.TimeEntry[] | Types.TeamMember[]>
              >
            }
            sortArray={sortedTimeEntries}
            sortList="timesheets"
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
