import React from "react";
import { useTranslation } from "react-i18next";
import { TypographyVariants } from "../../enums";
import { Colors, Typography } from "../../ui";
import { FormWithEmail } from "../FormWithEmail/FormWithEmail";
import { ContainerSC, SectionSC } from "./style";

export const FormSection = () => {
  const { t } = useTranslation();
  return (
    <SectionSC>
      <ContainerSC>
        <Typography variant={TypographyVariants.h3} color={Colors.INFOLIGHT}>
          {t("form.title")}
        </Typography>
        <FormWithEmail />
      </ContainerSC>
    </SectionSC>
  );
};
