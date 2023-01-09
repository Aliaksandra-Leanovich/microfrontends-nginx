import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { LinkSC } from "./styles";
import { ILinkProps } from "./types";

export const Link = ({
  children,
  variant,
  to,
}: React.PropsWithChildren<ILinkProps>) => {
  return (
    <RouterLink to={to}>
      <LinkSC variant={variant}>{children}</LinkSC>
    </RouterLink>
  );
};
