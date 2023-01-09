import { useNavigate } from "react-router-dom";
import { routes } from "src/routes";
import { useAppDispatch } from "src/store/hooks";
import { unsetUser } from "src/store/slices/userSlice";
import Cookies from "universal-cookie";

export const useLogout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const cookies = new Cookies();
  const handleLogout = () => {
    dispatch(unsetUser());
    cookies.remove("token", { path: "/" });
    navigate(routes.HOME);
  };

  return { handleLogout };
};
