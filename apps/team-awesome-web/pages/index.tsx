import { Header } from "../src/components/header";
import { TimeEntries } from "../src/components/time-entries";
import Types from "../src/types";

export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:3004/time-entries");
  const timeEntries = await response.json();
  return {
    props: {
      timeEntries,
    },
  };
};

interface TimeEntriesPageProps {
  timeEntries: Types.TimeEntry[];
}

const TimeEntriesPage = ({ timeEntries }: TimeEntriesPageProps) => {
  return (
    <>
      <Header />
      <TimeEntries initTimeEntries={timeEntries} />
    </>
  );
};

export default TimeEntriesPage;
