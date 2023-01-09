import styled from "@emotion/styled";
import { Colors } from "../../ui";

export const StyledHeaderSC = styled.header`
  width: 100%;
  z-index: 2;

  position: fixed;
  background-attachment: fixed;
  background-position: top center;
  background-color: ${Colors.PRIMARY};
`;

export const WrapperSC = styled.div`
  width: 100%;
  max-width: 1400px;

  margin: 0 auto;
  margin-top: 56px;
  padding: 0 100px 26px;
`;

export const ContainerSC = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
