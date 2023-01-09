import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { TypographyVariants } from "../enums/TypographyVariants";
import { media } from "./media";

export interface IProps {
  variant: TypographyVariants;
  color?: string;
}
interface ITypography {
  color?: string;
  variant: TypographyVariants;
}
export const TypographyTypes = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  paragraphS: "p",
  paragraphXS: "p",
  paragraphSBold: "p",
  paragraphM: "p",
  paragraphXSBold: "p",
  paragraphMBold: "p",
  subtitle: "p",
} as const;

const variantTypography = {
  h1: css`
    font-weight: 700;
    font-size: 70px;
    line-height: 84px;
    letter-spacing: -0.02em;
    ${media.TABLET} {
      font-size: 54px;
      line-height: 66px;
    }
    ${media.PHONE} {
      font-size: 36px;
      line-height: 44px;
    }
  `,
  h2: css`
    font-weight: 700;
    font-size: 56px;
    line-height: 64px;
  `,
  h3: css`
    font-weight: 300;
    font-size: 48px;
    line-height: 72px;
  `,
  h4: css`
    font-weight: 300;
    font-size: 36px;
    line-height: 56px;
  `,
  paragraphXS: css`
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
  `,
  paragraphXSBold: css`
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
  `,

  paragraphS: css`
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
  `,
  paragraphSBold: css`
    font-weight: 700;
    font-size: 20px;
    line-height: 32px;
  `,
  paragraphM: css`
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
  `,
  paragraphMBold: css`
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
  `,
  subtitle: css`
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
  `,
};

export const TypographyRoot = styled("p")<ITypography>`
  ${({ variant }) => variantTypography[variant]}
  color: ${({ color }) => color};
`;

export const Typography = ({
  variant,
  color,
  children,
}: React.PropsWithChildren<IProps>) => {
  const Component = variant
    ? TypographyTypes[variant]
    : ("p" as React.ElementType<any>);

  return (
    <TypographyRoot as={Component} color={color} variant={variant}>
      {children}
    </TypographyRoot>
  );
};

export default Typography;
