import React from "react";
import { Circles } from "./";
import {
  Persent,
  RowContainer,
  RowSC,
  RowsContainerSC,
  WrapperSC,
} from "./style";
import { Colors } from "./types";

const rows = [
  {
    width1: "54px",
    width2: "270px",
    color1: Colors.PRIMARY,
    color2: Colors.LIGHTGRAY,
    height1: "12px",
    height2: "12px",
    persent: "80%",
  },
  {
    width1: "54px",
    width2: "80px",
    color1: Colors.PRIMARY,
    color2: Colors.PRIMARY,
    height1: "12px",
    height2: "12px",
    persent: "30%",
  },
  {
    width1: "54px",
    width2: "318px",
    color1: Colors.PRIMARY,
    color2: Colors.INFOLIGHT,
    height1: "12px",
    height2: "12px",
    persent: "100%",
  },
  {
    width1: "54px",
    width2: "254px",
    color1: Colors.PRIMARY,
    color2: Colors.SECONDARY,
    height1: "12px",
    height2: "12px",
    persent: "75%",
  },
];

export const BarGorizontal = () => {
  return (
    <WrapperSC>
      <Circles />
      <RowsContainerSC>
        {rows.map((row) => (
          <RowContainer>
            <RowSC width={row.width1} color={row.color1} height={row.height1} />
            <RowSC width={row.width2} color={row.color2} height={row.height2} />
            <Persent>{row.persent}</Persent>
          </RowContainer>
        ))}
      </RowsContainerSC>
    </WrapperSC>
  );
};
