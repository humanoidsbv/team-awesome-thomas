import { getTimeEntries } from "../../src/services/get-time-entries";
import { Header } from "../../src/components/header";
import { TimeEntries } from "../../src/components/time-entries";
import Types from "../../src/types";

export const getServerSideProps = async () => {
  const response = await getTimeEntries();

  if (response instanceof Error) {
    return {
      props: {
        errorMessage: "There was an error fetching entries",
        timeEntries: [],
      },
    };
  }
  return {
    props: {
      timeEntries: response,
    },
  };
};

interface TimeEntriesPageProps {
  errorMessage?: string;
  timeEntries: Types.TimeEntry[];
}

const TimeEntriesPage = ({ errorMessage, timeEntries }: TimeEntriesPageProps) => {
  return (
    <>
      <Header />
      <TimeEntries errorMessage={errorMessage} timeEntries={timeEntries} />
    </>
  );
};

export default TimeEntriesPage;
