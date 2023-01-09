import styled from "@emotion/styled";
import { Colors } from "../../ui";
import { IPropsColumn, IPropsRow } from "./types";

export const WrapperSC = styled.div`
  max-width: 494px;
  width: 100%;
  padding: 14px 14px 28px;

  background: rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(34.3553px);
  border-radius: 15px;
`;

export const CirclesContainerSc = styled.div`
  display: flex;
  column-gap: 10px;
`;

export const CircleSC = styled.div<IPropsRow>`
  width: 10px;
  height: 10px;

  border-radius: 50%;
  background-color: ${({ color }) => color};
`;

export const RowsContainerSC = styled.div`
  margin-top: 40px;
  row-gap: 24px;
  padding-left: 14px;

  display: flex;
  flex-direction: column;
`;

export const RowSC = styled.div<IPropsRow>`
  border-radius: 14px;
  background-color: ${({ color }) => color};

  height: ${({ height }) => height};
  width: ${({ width }) => width};
`;

export const Persent = styled.p`
  font-size: 12px;
  color: ${Colors.INFOLIGHT};
`;

export const RowContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  column-gap: 14px;
`;

export const Column = styled.div<IPropsColumn>`
  border-radius: 12px;
  background-color: ${({ background }) => background};

  width: 9px;
  height: ${({ height }) => height};
`;

export const StyledBarsSC = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 26px;
`;
export const BarsBottomSC = styled.div`
  display: flex;
  column-gap: 28px;
`;

export const WrapperVerticalSC = styled.div`
  width: 192px;
  padding: 16px 18px 20px;

  background: rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(34.3553px);
  border-radius: 15px;
`;

export const DiagramTopSC = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  grid-gap: 12px;
  margin-top: 16px;
`;
export const DiagramBottomSC = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  grid-gap: 12px;
  padding-left: 2px;
`;

export const ContainerWithCircleANdRows = styled.div`
  margin-top: 24px;
  column-gap: 32px;

  display: flex;
  align-items: center;
`;

export const CircleMainSC = styled.div`
  position: relative;

  width: 92px;
  height: 92px;

  transform: rotate(-20deg);

  border-radius: 50%;
  background: radial-gradient(${Colors.PRIMARY} 50%, transparent 41%),
    conic-gradient(
      ${Colors.SECONDARY} 0% 33%,
      ${Colors.PRIMARY} 33% 66%,
      ${Colors.LIGHTBLUE} 66% 100%
    );

  &:after {
    content: " ";
    z-index: 1;
    position: absolute;
    top: 12px;
    left: 12px;

    width: 66px;
    height: 66px;

    border-radius: 50%;
    background: rgba(255, 255, 255, 0.18);
  }
`;

export const WrapperCircleSC = styled.div`
  width: 260px;
  padding: 12px 16px 26px;

  background: rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(34.3553px);
  border-radius: 15px;
`;

export const RowsCircleContainerSC = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 14px;
`;
