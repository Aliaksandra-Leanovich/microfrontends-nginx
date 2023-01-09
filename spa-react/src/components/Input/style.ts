import styled from "@emotion/styled";
import { Colors } from "../../ui";

export const StyledInputSC = styled.input`
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

export const ContainerSC = styled.div`
  flex-direction: column;
  row-gap: 16px;
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

export const WarningTextSC = styled.p`
  font-size: 20px;
  line-height: 32px;
`;
