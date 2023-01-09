import {
  browserLocalPersistence,
  getAuth,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "src/store/hooks";
import Cookies from "universal-cookie";
import { getAuthError } from "../helper";
import { routes } from "../routes";
import { setUserToken } from "../store/slices/userSlice";
import { app } from "../utils";
import { IUserForm } from "../components/LoginForm/types";

export const useLogin = (
  setShow: (value: boolean) => void,
  clearErrors: () => void
) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const cookies = new Cookies();
  const localStorageKey = "userToken";

  const [error, setError] = useState("");

  const setUserTokenToStorage = (token: string) => {
    localStorage.setItem(localStorageKey, token);
    cookies.set("token", token, { path: "/" });
    dispatch(setUserToken(token));
  };

  const onSubmit = (data: IUserForm) => {
    const auth = getAuth(app);
    setPersistence(auth, browserLocalPersistence)
      .then(async () => {
        return await signInWithEmailAndPassword(auth, data.email, data.password)
          .then(async (userCredential) => {
            const token = await userCredential.user.getIdToken();
            setShow(false);
            clearErrors();
            setUserTokenToStorage(token);
            navigate(routes.HOME);
          })
          .catch((error) => {
            setError(getAuthError(error.code));
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return { error, onSubmit };
};
