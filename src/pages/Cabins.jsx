import AddCabin from "../features/cabins/AddCabin";
import CabinRow from "../features/cabins/CabinRow";
import CabinTable from "../features/cabins/CabinTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTableOperation from "./../features/cabins/CabinTableOperation";

function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperation />
      </Row>
      <Row>
        <CabinTable>
          <CabinRow />
        </CabinTable>
        <AddCabin />
      </Row>
    </>
  );
}

export default Cabins;
