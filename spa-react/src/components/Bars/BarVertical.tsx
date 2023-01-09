import React from "react";
import { Circles } from "./";
import {
  Column,
  DiagramBottomSC,
  DiagramTopSC,
  WrapperVerticalSC,
} from "./style";
import { Colors } from "./types";

const columns = [
  {
    height: "62px",
    background: Colors.LIGHTBLUE,
  },
  {
    height: "42px",
    background: Colors.LIGHTBLUE,
  },
  {
    height: "82px",
    background: Colors.PRIMARY,
  },
  {
    height: "58px",
    background: Colors.LIGHTBLUE,
  },
  {
    height: "70px",
    background: Colors.LIGHTBLUE,
  },
  {
    height: "32px",
    background: Colors.LIGHTBLUE,
  },
  {
    height: "24px",
    background: Colors.LIGHTBLUE,
  },
  {
    height: "14px",
    background: Colors.LIGHTBLUE,
  },
];

const columnsUp = columns.slice(0, 6);
const columnsDown = columns.slice(6, 8);

export const BarVertical = () => {
  return (
    <WrapperVerticalSC>
      <Circles />
      <DiagramTopSC>
        {columnsUp.map((column) => (
          <Column height={column.height} background={column.background} />
        ))}
      </DiagramTopSC>
      <DiagramBottomSC>
        {columnsDown.map((column) => (
          <Column height={column.height} background={column.background} />
        ))}
      </DiagramBottomSC>
    </WrapperVerticalSC>
  );
};
