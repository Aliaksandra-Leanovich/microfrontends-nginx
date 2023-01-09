import { Breakpoint } from "./breakpoints";

export const media = {
  PHONE: `@media (max-width: ${Breakpoint.SM}px)`,
  TABLET: `@media (max-width: ${Breakpoint.M}px)`,
  LAPTOP: `@media (max-width: ${Breakpoint.MD}px)`,
  DESKTOP: `@media (max-width: ${Breakpoint.L}px)`,
  BIGDESKTOP: `@media (max-width: ${Breakpoint.XL}px)`,
};
