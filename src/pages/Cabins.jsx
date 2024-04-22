import { useState } from "react";
import CabinRow from "../features/cabins/CabinRow";
import CabinTable from "../features/cabins/CabinTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Button from "./../ui/Button";
import CreateCabinForm from "./../features/cabins/CreateCabinForm";

function Cabins() {
  const [showForm, setShowForm] = useState(false);
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
        <Button type="primary" onClick={() => setShowForm((show) => !show)}>
          {showForm ? "Close Form" : "Show Form"}
        </Button>
        {showForm && <CreateCabinForm />}
      </Row>
    </>
  );
}

export default Cabins;
