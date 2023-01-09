import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ButtonVariants } from "../../enums";
import { Colors } from "../../ui";
import { IButton } from "./types";

const variantStyles = (variant = ButtonVariants.primaryLarge) =>
  ({
    primaryLarge: css`
      background: ${Colors.PRIMARY};
      border: 2px solid ${Colors.PRIMARY};
      color: ${Colors.INFOLIGHT};
      border-radius: 24px;
      font-weight: 700;
      font-size: 20px;
      line-height: 28px;
      border-radius: 56px;
      padding: 16px 56px;
    `,
    primaryGreenLarge: css`
      background: ${Colors.SECONDARY};
      border: 2px solid ${Colors.SECONDARY};
      color: ${Colors.PRIMARY};
      border-radius: 24px;
      font-weight: 700;
      font-size: 20px;
      line-height: 28px;
      border-radius: 56px;
      padding: 16px 56px;
    `,
    primaryWhiteLarge: css`
      background: ${Colors.INFOLIGHT};
      border: 2px solid ${Colors.INFOLIGHT};
      color: ${Colors.PRIMARY};
      border-radius: 24px;
      font-weight: 700;
      font-size: 20px;
      line-height: 28px;
      border-radius: 56px;
      padding: 16px 56px;
    `,
    secondaryLarge: css`
      background: transparent;
      border: 2px solid ${Colors.PRIMARY};
      color: ${Colors.PRIMARY};
      border-radius: 24px;
      font-weight: 700;
      font-size: 20px;
      line-height: 28px;
      border-radius: 56px;
      padding: 16px 56px;
    `,
    secondaryWhiteLarge: css`
      background: transparent;
      border: 2px solid ${Colors.INFOLIGHT};
      color: ${Colors.INFOLIGHT};
      border-radius: 24px;
      font-weight: 700;
      font-size: 20px;
      line-height: 28px;
      border-radius: 56px;
      padding: 16px 56px;
    `,
    primaryWhiteSmall: css`
      padding: 8px 40px;
      background: ${Colors.INFOLIGHT};
      border: 2px solid ${Colors.INFOLIGHT};
      border-radius: 24px;
      font-weight: 700;
      line-height: 24px;

      color: ${Colors.PRIMARY};
    `,
  }[variant]);

export const ButtonSC = styled.button<Pick<IButton, "variant">>`
  ${({ variant }) => variantStyles(variant)}

  font-weight: 700;
  font-size: 20px;
  line-height: 28px;

  border-radius: 56px;

  padding: 16px 56px;

  transition: background-color 0.5s ease-out, border-color 0.5s ease-out;

  &:hover {
    background-color: ${Colors.LIGHTBLUE};
    border-color: transparent;
  }
`;
