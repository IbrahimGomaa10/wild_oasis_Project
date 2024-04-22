import AddCabin from "../features/cabins/AddCabin";
import CabinRow from "../features/cabins/CabinRow";
import CabinTable from "../features/cabins/CabinTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>TEST</p>
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
