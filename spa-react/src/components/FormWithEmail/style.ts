import styled from "@emotion/styled";
import { Colors } from "../../ui";

export const ContainerInputSC = styled.div`
  max-width: 370px;
  width: 100%;

  flex-direction: column;
  row-gap: 16px;
`;

export const FormSC = styled.form`
  display: flex;
  justify-content: center;

  column-gap: 24px;
`;

export const Input = styled.input`
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;

  padding: 12px 32px;
  width: 100%;

  border: 2px solid #ffffff;
  border-radius: 240px;

  &:focus {
    outline: none;
  }
`;

export const ErrorMessageSC = styled.div`
  position: absolute;

  display: flex;
  align-items: center;

  margin-top: 10px;
  color: ${Colors.RED};

  svg {
    margin: 0 6px;
    width: 14px;
    fill: ${Colors.RED};
  }
`;

export const IconSC = styled.img`
  display: block;
  height: 26px;
`;

export const ButtonSC = styled.button`
  width: 210px;
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${Colors.SECONDARY};
  border: 2px solid ${Colors.SECONDARY};
  color: ${Colors.PRIMARY};
  border-radius: 24px;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  border-radius: 56px;
  padding: 16px 0;
`;
