import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ArrowRight from "../../assets/arrowRight.svg";
import ExploreImg1 from "../../assets/exploreImg1.svg";
import ExploreImg2 from "../../assets/exploreImg2.svg";
import ExploreImg3 from "../../assets/exploreImg3.svg";
import { TypographyVariants } from "../../enums";
import { Colors, Typography } from "../../ui";
import { FormWithEmail } from "../FormWithEmail/FormWithEmail";
import { Modal } from "../Modal/Modal";
import {
  BlockSC,
  ContainerOfBlocksSC,
  ContainerSC,
  ImageSC,
  LinkBlockSC,
  LinkSC,
  SectionSC,
  TitleContainerSC,
  TitleSC,
} from "./style";

const config = [
  {
    image: ExploreImg1,
    link: {
      image: ArrowRight,
    },
  },
  {
    image: ExploreImg2,

    link: {
      image: ArrowRight,
    },
  },
  {
    image: ExploreImg3,

    link: {
      image: ArrowRight,
    },
  },
];

export const ExploreSection = () => {
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(!show);
  };
  const { t } = useTranslation();

  return (
    <SectionSC>
      <ContainerSC>
        <TitleSC>{t("services.subtitle")}</TitleSC>
        <ContainerOfBlocksSC>
          {config.map((item, index) => (
            <BlockSC key={index}>
              <ImageSC src={item.image} alt="explore section" />
              <TitleContainerSC>
                <Typography variant={TypographyVariants.paragraphM}>
                  {t("explore.card.title")}
                </Typography>
              </TitleContainerSC>

              <Typography
                variant={TypographyVariants.paragraphS}
                color={Colors.GRAY}
              >
                {t("explore.card.subtitle")}
              </Typography>
              <LinkBlockSC>
                <LinkSC onClick={showModal}> {t("explore.card.link")} </LinkSC>
                <img src={item.link.image} alt="arrow" />
              </LinkBlockSC>
            </BlockSC>
          ))}
        </ContainerOfBlocksSC>
      </ContainerSC>
      <Modal show={show} handleClose={showModal} width="800px">
        <FormWithEmail />
      </Modal>
    </SectionSC>
  );
};
