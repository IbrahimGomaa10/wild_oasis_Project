import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new Cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
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
