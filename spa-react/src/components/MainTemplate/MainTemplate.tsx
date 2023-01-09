import React from "react";
import { Outlet } from "react-router-dom";
import { ContainerSC, WrapperSC } from "./style";

export const MainTemplate = () => {
  return (
    <WrapperSC>
      <ContainerSC>
        <Outlet />
      </ContainerSC>
    </WrapperSC>
  );
};
