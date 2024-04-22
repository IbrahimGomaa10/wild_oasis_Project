import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";
import CabinTable from "./CabinTable";

function AddCabin() {
  return (
    <>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new Cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
      <Modal>
        <Modal.Open opens="table">
          <Button>Show Table</Button>
        </Modal.Open>
        <Modal.Window name="table">
          <CabinTable />
        </Modal.Window>
      </Modal>
    </>
  );
}

// function AddCabin() {
//   const [isOpenForm, setIsOpenForm] = useState(false);

//   return (
//     <div>
//       <Button type="primary" onClick={() => setIsOpenForm((show) => !show)}>
//         {isOpenForm ? "Close Form" : "Show Form"}
//       </Button>
//       {isOpenForm && (
//         <Modal onClose={() => setIsOpenForm(false)}>
//           <CreateCabinForm onCloseModal={() => setIsOpenForm(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddCabin;
