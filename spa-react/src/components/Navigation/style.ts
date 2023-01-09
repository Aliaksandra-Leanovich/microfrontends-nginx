import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { Colors } from "../../ui";

export const ContainerSC = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  column-gap: 40px;
`;

export const LinkSC = styled.a`
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  color: ${Colors.INFOLIGHT};
  cursor: pointer;

  transition: border 0.5s ease-out;

  &:hover {
    border-bottom: 1px solid ${Colors.INFOLIGHT};
  }
`;

export const LinkCustomSC = styled(Link)`
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  color: ${Colors.INFOLIGHT};
  cursor: pointer;

  transition: border 0.5s ease-out;

  &:hover {
    border-bottom: 1px solid ${Colors.INFOLIGHT};
  }
`;

export const ButtonSC = styled.button`
  padding: 9px 40px;

  background: ${Colors.INFOLIGHT};
  border: 2px solid ${Colors.INFOLIGHT};
  border-radius: 24px;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;

  color: ${Colors.PRIMARY};
`;
