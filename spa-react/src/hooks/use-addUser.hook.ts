import { addDoc, collection } from "firebase/firestore";
import { UseFormGetValues } from "react-hook-form";

import { db } from "../utils/firebase";

export const useAddUser = (
  reset: () => void,
  getValues: UseFormGetValues<any>
) => {
  const addUser = async (email: string) => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        email: email,
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (event) {
      console.error("Error adding document: ", event);
    }
  };

  const onSubmit = () => {
    const { email } = getValues();
    addUser(email);
    reset();
  };

  return { onSubmit };
};
