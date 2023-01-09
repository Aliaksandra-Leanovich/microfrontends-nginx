import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import CheckImg from "../../assets/checkImg.svg";
import ConnectImg1 from "../../assets/connectImg1.svg";
import ConnectImg2 from "../../assets/connectImg2.svg";
import { ReactComponent as EyeImg } from "../../assets/eye.svg";
import { ReactComponent as FeatherImg } from "../../assets/feather.svg";
import { ReactComponent as SunImg } from "../../assets/sun.svg";
import { ButtonVariants, TypographyVariants } from "../../enums";
import { Colors, Typography } from "../../ui";
import { Button } from "../Button";
import { FormWithEmail } from "../FormWithEmail/FormWithEmail";
import { Modal } from "../Modal/Modal";

import {
  AdvantageSC,
  AdvantagesContainerSC,
  BlockWithCirclSC,
  CheckImgSC,
  CircleSC,
  Column,
  ContainerBlocksSC,
  ContainerDiagramSC,
  ContainerImageAndDiagramSC,
  ContainerSC,
  DescriptionBlockSC,
  DescriptionDiagramSC,
  DescriptionSC,
  DiagramBottomSC,
  DiagramTopSC,
  DotSC,
  ImageContainerSC,
  PersentsBlockSC,
  PersentsContainerSC,
  PersentTextSC,
  SectionSC,
  TextContainerSC,
  TitleContainerSC,
} from "./style";

const config = [
  { text: "first", image: <FeatherImg /> },
  { text: "second", image: <EyeImg /> },
  { text: "third", image: <SunImg /> },
];

const columns = [
  { height: "134px", background: Colors.INFOLIGHT },
  { height: "92px", background: Colors.INFOLIGHT },
  { height: "134px", background: Colors.LIGHTBLUE },
  { height: "92px", background: Colors.LIGHTBLUE },
  { height: "176px", background: Colors.PRIMARY },
  { height: "124px", background: Colors.LIGHTBLUE },
  { height: "150px", background: Colors.LIGHTBLUE },
  { height: "68px", background: Colors.LIGHTBLUE },
  { height: "50px", background: Colors.LIGHTBLUE },
  { height: "28px", background: Colors.LIGHTBLUE },
];

export const ConnectSection = () => {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(!show);
  };

  const columnUp = columns.slice(0, 8);
  const columnsDown = columns.slice(7, 9);

  return (
    <SectionSC>
      <ContainerSC>
        <ContainerBlocksSC>
          <ContainerImageAndDiagramSC>
            <ImageContainerSC height="506px" background={ConnectImg1} />
            <ContainerDiagramSC>
              <DiagramTopSC>
                {columnUp.map((column) => (
                  <Column
                    height={column.height}
                    background={column.background}
                  />
                ))}
              </DiagramTopSC>
              <DiagramBottomSC>
                {columnsDown.map((column) => (
                  <Column
                    height={column.height}
                    background={column.background}
                  />
                ))}
              </DiagramBottomSC>

              <DescriptionDiagramSC>
                <Typography
                  variant={TypographyVariants.paragraphMBold}
                  color={Colors.PRIMARY}
                >
                  30%
                </Typography>
                <Typography
                  variant={TypographyVariants.subtitle}
                  color={Colors.PRIMARY}
                >
                  {t("connect.diagram.first")}
                </Typography>
              </DescriptionDiagramSC>
            </ContainerDiagramSC>
          </ContainerImageAndDiagramSC>

          <TextContainerSC>
            <TitleContainerSC>
              <Typography variant={TypographyVariants.h4}>
                {t(`connect.title`)}
              </Typography>
            </TitleContainerSC>

            <DescriptionBlockSC>
              {config.map((item, index) => (
                <DescriptionSC key={index}>
                  <CheckImgSC src={CheckImg} />
                  <Typography variant={TypographyVariants.paragraphS}>
                    {t(`connect.subtitle.${item.text}`)}
                  </Typography>
                </DescriptionSC>
              ))}
            </DescriptionBlockSC>
            <Button
              handleClick={showModal}
              variant={ButtonVariants.primaryLarge}
              type="button"
            >
              {t(`connect.button`)}
            </Button>
          </TextContainerSC>
        </ContainerBlocksSC>
        <ContainerBlocksSC>
          <TextContainerSC>
            <TitleContainerSC>
              <Typography variant={TypographyVariants.h4}>
                {t(`connect.title`)}
              </Typography>
            </TitleContainerSC>

            <DescriptionBlockSC>
              <AdvantagesContainerSC>
                {config.map((item, index) => (
                  <AdvantageSC key={index}>
                    {item.image}
                    <Typography variant={TypographyVariants.paragraphS}>
                      {t(`connect.subtitle.${item.text}`)}
                    </Typography>
                  </AdvantageSC>
                ))}
              </AdvantagesContainerSC>
            </DescriptionBlockSC>
          </TextContainerSC>
          <ContainerImageAndDiagramSC>
            <ImageContainerSC height="524px" background={ConnectImg2} />
            <BlockWithCirclSC>
              <CircleSC />
              <PersentsBlockSC>
                <PersentsContainerSC>
                  <DotSC background={Colors.LIGHTBLUE} />
                  <PersentTextSC>{t("connect.precent.first")} </PersentTextSC>
                </PersentsContainerSC>
                <PersentsContainerSC>
                  <DotSC background={Colors.SECONDARY} />
                  <PersentTextSC>{t("connect.precent.second")}</PersentTextSC>
                </PersentsContainerSC>
                <PersentsContainerSC>
                  <DotSC background={Colors.GRAY} />
                  <PersentTextSC>{t("connect.precent.third")}</PersentTextSC>
                </PersentsContainerSC>
              </PersentsBlockSC>
            </BlockWithCirclSC>
          </ContainerImageAndDiagramSC>
        </ContainerBlocksSC>
      </ContainerSC>
      <Modal show={show} handleClose={showModal} width="800px">
        <FormWithEmail />
      </Modal>
    </SectionSC>
  );
};
