import React from "react";
import { ButtonSC } from "./style";
import { IButton } from "./types";

export const Button = ({
  children,
  type,
  variant,
  handleClick,
}: React.PropsWithChildren<IButton>) => {
  return (
    <ButtonSC variant={variant} type={type} onClick={handleClick}>
      {children}
    </ButtonSC>
  );
};
