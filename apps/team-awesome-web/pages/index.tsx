import { getTimeEntries } from "../src/services/getTimeEntries";
import { Header } from "../src/components/header";
import { TimeEntries } from "../src/components/time-entries";
import Types from "../src/types";

export const getServerSideProps = async () => {
  const response = await getTimeEntries();

  if (response instanceof Error) {
    return {
      props: {
        timeEntries: [],
        errorMsg: "There was an error fetching entries",
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
  timeEntries: Types.TimeEntry[];
  errorMessage?: string;
}

const TimeEntriesPage = ({ timeEntries, errorMessage }: TimeEntriesPageProps) => {
  return (
    <>
      <Header />
      <TimeEntries timeEntries={timeEntries} errorMessage={errorMessage} />
    </>
  );
};

export default TimeEntriesPage;
