import styled from "@emotion/styled";
import { Swiper } from "swiper/react";
import { Colors } from "../../ui";
import { IStylesProps } from "./types";

export const SectionSC = styled.section`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${Colors.PRIMARY};
`;

export const ContainerSC = styled.div`
  max-width: 1400px;
  width: 100%;

  padding: 96px 100px 96px 150px;

  position: relative;
`;

export const TitleContainerSC = styled.div`
  max-width: 716px;
  width: 100%;

  display: flex;
`;

export const TitleSC = styled.h3`
  font-weight: 400;
  font-size: 48px;
  line-height: 72px;

  color: ${Colors.INFOLIGHT};
`;

export const CustomSwiperSC = styled(Swiper)`
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ContainerSlideSC = styled.div`
  max-width: 350px;
  width: 100%;

  padding: 40px;

  background-color: ${Colors.INFOLIGHT};
  box-shadow: 0px 12px 32px rgba(0, 0, 0, 0.12);
  border-radius: 12px;
`;

export const CommentSliderSC = styled.p`
  font-size: 24px;
  line-height: 36px;
`;

export const AuthorSliderSC = styled.div`
  margin-top: 40px;

  display: flex;
  column-gap: 16px;
`;

export const AuthImageSC = styled.div<IStylesProps>`
  width: 58px;
  height: 58px;

  border-radius: 50%;
  background-image: url(${({ background }) => background});
  background-position: center;
  background-repeat: no-repeat;
`;

export const AuthorInfromationSC = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
`;

export const AuthorNameSC = styled.p`
  font-weight: 700;
  line-height: 32px;
  color: ${Colors.PRIMARY};
`;

export const AuthorPositionSC = styled.p`
  font-size: 14px;
  line-height: 32px;
  color: ${Colors.PRIMARY};
`;

export const ContainerSwiperSC = styled.div`
  padding-right: 50px;
  width: 100%;
  margin-top: 72px;

  position: relative;
`;

export const ButtonsContainerSC = styled.div`
  display: flex;
  align-self: flex-end;

  column-gap: 28px;
`;

export const ButtonArrowSC = styled.button`
  width: 72px;
`;

export const BlockSC = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
