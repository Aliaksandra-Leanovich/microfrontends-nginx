import styled from "@emotion/styled";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../utils/firebase";
import { IData } from "./types";

export const EmailsTable = () => {
  const [emails, setEmails] = useState<IData[]>();

  useEffect(() => {
    getEmails();
  }, []);

  const getEmails = () => {
    const emailsCollectionRef = collection(db, "users");
    getDocs(emailsCollectionRef)
      .then((response) => {
        const users = response.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
        setEmails(users);
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <WrapperSC>
      <ContainerSC>
        {emails?.map((email) => (
          <div key={email.id}>
            <p>{email.data.email} </p>
          </div>
        ))}
      </ContainerSC>
    </WrapperSC>
  );
};

export const WrapperSC = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 12px;
`;

export const ContainerSC = styled.div`
  max-width: 1400px;
  width: 100%;

  padding: 0 100px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
