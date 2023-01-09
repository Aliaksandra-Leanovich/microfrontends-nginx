import styled from "@emotion/styled";
import { Colors } from "../../ui";
import { IStylesProps } from "./types";

export const WrapperSC = styled.div<IStylesProps>`
  display: ${({ show }) => (show ? "block" : "none")};

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;

export const ContainerSC = styled.div<IStylesProps>`
  position: fixed;
  background: ${Colors.PRIMARY};

  padding: 20px 30px 60px 60px;
  max-width: 560px;
  width: 100%;

  border-radius: 24px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  max-width: ${({ width }) => width};

  main {
    overflow: ${({ show }) => (show ? "hidden" : "auto")};
  }
`;

export const ContainerButtonSC = styled.div`
  align-self: flex-end;
`;

export const ButtonSC = styled.button`
  width: 20px;

  cursor: pointer;

  svg {
    fill: ${Colors.INFOLIGHT};
  }

  &:hover {
    svg {
      fill: ${Colors.PROGRESSLIGHT};
    }
  }
`;
export const ContainerChildSC = styled.div`
  padding: 10px 30px 0 0;
`;
