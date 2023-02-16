import { Header } from "../src/components/header";
import { TimeEntries } from "../src/components/time-entries";
import Types from "../src/types";
import { getTimeEntries } from "../src/services/getTimeEntries";

export const getServerSideProps = async () => {
  const response = await getTimeEntries("http://localhost:3004/time-entries");
  if (response instanceof Error) {
    return {
      props: {
        timeEntries: [],
        message: "There was an error fetching entries",
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
  message?: string;
}

const TimeEntriesPage = ({ timeEntries, message }: TimeEntriesPageProps) => {
  return (
    <>
      <Header />
      <TimeEntries initTimeEntries={timeEntries} initErrorMessage={message} />
    </>
  );
};

export default TimeEntriesPage;
