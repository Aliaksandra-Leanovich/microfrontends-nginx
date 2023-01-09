import React from "react";
import { BarCircle, BarGorizontal, BarVertical } from "./";
import { BarsBottomSC, StyledBarsSC } from "./style";

export const Bar = () => {
  return (
    <StyledBarsSC>
      <BarGorizontal />
      <BarsBottomSC>
        <BarVertical />
        <BarCircle />
      </BarsBottomSC>
    </StyledBarsSC>
  );
};
