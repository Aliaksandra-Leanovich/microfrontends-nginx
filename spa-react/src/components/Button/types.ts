import { ButtonHTMLAttributes } from "react";
import { ButtonVariants } from "../../enums";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariants;
  handleClick?: () => void;
}
