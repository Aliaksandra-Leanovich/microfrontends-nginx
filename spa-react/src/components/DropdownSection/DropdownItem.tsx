import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { TypographyVariants } from "../../enums";
import { Typography } from "../../ui";
import {
  DropdownButtonSC,
  DropdownContainerSC,
  DropdownDescriptionSC,
  DropdownSC,
} from "./style";

export const DropdownItem = ({ item }: any) => {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!isOpen);
  };
  const { t } = useTranslation();
  return (
    <DropdownContainerSC>
      <DropdownSC>
        <Typography variant={TypographyVariants.paragraphS}>
          {t(`dropdown.${item.title}`)}
        </Typography>
        <DropdownButtonSC onClick={handleClick} isOpen={isOpen}>
          {item.image}
        </DropdownButtonSC>
      </DropdownSC>
      <DropdownDescriptionSC isOpen={isOpen}>
        <Typography variant={TypographyVariants.paragraphXS}>
          {item.description}
        </Typography>
      </DropdownDescriptionSC>
    </DropdownContainerSC>
  );
};
