import styled from "@emotion/styled";
import { IStylesProps } from "./types";

export const LogoSC = styled.div<IStylesProps>`
  display: flex;

  column-gap: 10px;
`;

export const RectanglesSC = styled.div`
  display: flex;
  flex-direction: column;

  row-gap: 2px;
`;

export const SmallRectangleSC = styled.div<IStylesProps>`
  width: 18px;
  height: 14px;

  border-radius: 0px 12px 12px 0px;
  background-color: ${({ background }) => background};
`;

export const BigRectangleSC = styled.div<IStylesProps>`
  width: 24px;
  height: 18px;

  border-radius: 0px 12px 12px 0px;
  background-color: ${({ background }) => background};
`;

export const Text = styled.p<IStylesProps>`
  color: ${({ color }) => color};

  font-weight: 700;
  font-size: 44px;
  line-height: 34px;
`;
