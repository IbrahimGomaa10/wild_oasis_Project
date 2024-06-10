import ButtonIcon from "./../../ui/ButtonIcon";
import { HiOutlineLogout } from "react-icons/hi";
import { useLogout } from "./useLogout";
import SpinnerMini from "./../../ui/SpinnerMini";

function Logout() {
  const { logout, isLoading } = useLogout();
  return (
    <ButtonIcon disabled={isLoading} onClick={logout}>
      {!isLoading ? <HiOutlineLogout /> : <SpinnerMini />}
    </ButtonIcon>
  );
}

export default Logout;
