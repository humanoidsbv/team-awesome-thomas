import { Header } from "../src/components/header";
import { SubHeader } from "../src/components/sub-header";
import { TimeEntries } from "../src/components/time-entries";

export function Index() {
  return (
    <>
      <Header />
      <SubHeader />
      <TimeEntries />
    </>
  );
}

export default Index;
