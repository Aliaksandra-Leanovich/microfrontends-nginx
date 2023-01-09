import React from "react";
import { useTranslation } from "react-i18next";
import { TypographyVariants } from "../../enums";
import { Colors } from "../../ui";
import { Typography } from "../../ui/Typography";
import { ConnectSection } from "../ConnectSection";
import { ExploreSection } from "../ExploreSection";
import { SectionSC, WrapperSC } from "./style";

export const ServicesSection = () => {
  const { t } = useTranslation();
  return (
    <SectionSC id="services">
      <WrapperSC>
        <Typography variant={TypographyVariants.paragraphS} color={Colors.GRAY}>
          {t("services.title")}
        </Typography>
        <ExploreSection />
        <ConnectSection />
      </WrapperSC>
    </SectionSC>
  );
};
