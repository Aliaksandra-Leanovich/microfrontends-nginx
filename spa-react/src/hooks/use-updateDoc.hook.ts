import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../utils/firebase";

export const useUpdateDoc = () => {
  const checkRef = doc(db, "checkField", "check");

  const [checked, setChecked] = useState<boolean>();

  const toggleCheck = async () => {
    const checkedStatus = !checked;

    await updateDoc(checkRef, {
      checked: checkedStatus,
    })
      .then((checkRef) => {
        console.log(
          "A Document Field has been updated in an existing document"
        );
      })
      .catch((error) => {
        console.log(error);
      });

    setChecked(checkedStatus);
  };

  return { toggleCheck };
};
