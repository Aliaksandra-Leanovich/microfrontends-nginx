import React from "react";
import { useTranslation } from "react-i18next";
import BackgroundImage from "../../assets/dropdownBackground.svg";
import { ReactComponent as DropdowmImage } from "../../assets/dropdownImage.svg";
import { TypographyVariants } from "../../enums";
import { Typography } from "../../ui";
import { DropdownItem } from "./DropdownItem";
import {
  ContainerImageSC,
  ContainerInformationSC,
  ContainerSC,
  DescriptionBlockSC,
  DropdownsContainerSC,
  SectionSC,
} from "./style";

const config = [
  {
    title: "first",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
    image: <DropdowmImage />,
  },
  {
    title: "second",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.  ",
    image: <DropdowmImage />,
  },
];

export const DropdownSection = () => {
  const { t } = useTranslation();
  return (
    <SectionSC>
      <ContainerSC>
        <ContainerImageSC background={BackgroundImage} />

        <ContainerInformationSC>
          <DescriptionBlockSC>
            <Typography variant={TypographyVariants.h3}>
              {t("connect.title")}
            </Typography>
          </DescriptionBlockSC>

          <DropdownsContainerSC>
            {config.map((item, index) => (
              <DropdownItem item={item} key={index} />
            ))}
          </DropdownsContainerSC>
        </ContainerInformationSC>
      </ContainerSC>
    </SectionSC>
  );
};
