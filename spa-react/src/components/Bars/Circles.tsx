import React from "react";

import { CircleSC, CirclesContainerSc } from "./style";
import { Colors } from "./types";

const circles = [
  {
    color: Colors.RED,
  },
  {
    color: Colors.YELLOW,
  },
  {
    color: Colors.GREEN,
  },
];

export const Circles = () => {
  return (
    <CirclesContainerSc>
      {circles.map((circle) => (
        <CircleSC color={circle.color} />
      ))}
    </CirclesContainerSc>
  );
};
