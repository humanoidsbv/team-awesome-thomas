import { Header } from "../src/components/header";
import { TimeEntries } from "../src/components/time-entries";

export function TimeEntriesPage() {
  return (
    <>
      <Header />
      {/* Sectie met alles wat bij time entries hoort: */}
      <TimeEntries />
      {/* TimeEntriesScreen  
      [te, setTE]
      [isModalActive, setIs...]


      const handleSubmmit = (nte) => {
      //  voeg die toe aan bestaande te.
      }


      <Container>
        <TimeEntries te={te}/>

        <Modal>
          <TimeEntriesForm handleSubmit={handleSubmit} /> // gebruikt de NTE useState
        </Modal

      </Container
      
      */}
    </>
  );
}

export default TimeEntriesPage;
