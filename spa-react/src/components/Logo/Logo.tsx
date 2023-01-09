import React from "react";
import {
  BigRectangleSC,
  LogoSC,
  RectanglesSC,
  SmallRectangleSC,
  Text,
} from "./style";
import { IStylesProps } from "./types";

export const Logo = ({ color, background }: IStylesProps) => {
  return (
    <LogoSC>
      <RectanglesSC>
        <SmallRectangleSC background={background} />
        <BigRectangleSC background={background} />
      </RectanglesSC>

      <Text color={color}>Boldo</Text>
    </LogoSC>
  );
};
