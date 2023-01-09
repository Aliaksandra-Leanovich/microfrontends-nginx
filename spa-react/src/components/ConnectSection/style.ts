import styled from "@emotion/styled";
import { Colors, media } from "../../ui";
import { IProps, IPropsStyle } from "./types";

export const SectionSC = styled.section`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 120px;
`;

export const ContainerSC = styled.div`
  max-width: 1400px;
  width: 100%;

  padding: 0 100px 126px;
`;

export const ContainerBlocksSC = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  column-gap: 150px;
  margin-bottom: 120px;

  ${media.LAPTOP} {
    grid-template-columns: 1fr;
    grid-gap: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 30px;
  }
`;

export const ImageContainerSC = styled.div<IPropsStyle>`
  width: 494px;
  height: ${({ height }) => height};

  background-image: url(${({ background }) => background});
  background-repeat: no-repeat;
`;

export const ImageSC = styled.img`
  width: 100%;
`;

export const TextContainerSC = styled.div`
  max-width: 500px;
  width: 100%;
`;

export const TitleContainerSC = styled.div`
  margin-top: 124px;
`;

export const DescriptionBlockSC = styled.div`
  display: flex;
  flex-direction: column;

  row-gap: 24px;
  margin: 40px 0 56px;
`;
export const DescriptionSC = styled.div`
  display: flex;
  align-items: center;

  column-gap: 27px;
`;

export const CheckImgSC = styled.img`
  width: 36px;
`;

export const Block = styled.div`
  background-color: #bbbbbb;

  width: 500px;
  height: 252px;
`;
export const AdvantagesContainerSC = styled.div`
  display: flex;
  flex-direction: column;

  row-gap: 24px;
`;
export const AdvantageSC = styled.div`
  display: flex;
  align-items: center;

  column-gap: 12px;
  padding: 20px;

  max-width: 500px;
  width: 100%;

  background: #ffffff;
  box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.08);
  border-radius: 4px;

  transition: stroke 0.5s ease-out, background-color 0.5s ease-out,
    color 0.5s ease-out;

  svg {
    path {
      stroke: #000;
    }
  }

  &:hover {
    background: #0a2640;

    p {
      color: #fff;
    }

    svg {
      path {
        stroke: #fff;
      }
    }
  }
`;

export const ContainerImageAndDiagramSC = styled.div`
  position: relative;

  max-width: 494px;
  width: 100%;

  display: block;
  justify-content: center;
  align-items: center;
`;

export const ContainerDiagramSC = styled.div`
  position: absolute;

  top: 210px;
  left: 180px;
  width: 251px;
  height: 388px;

  padding: 40px;

  background: ${Colors.INFOLIGHT};
  box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.12);
  border-radius: 12px;
`;

export const DiagramTopSC = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  grid-gap: 12px;
`;

export const DiagramBottomSC = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  grid-gap: 12px;
`;

export const DescriptionDiagramSC = styled.div`
  margin-top: 20px;
`;

export const Column = styled.div<IProps>`
  width: 12px;
  height: ${({ height }) => height};

  background-color: ${({ background }) => background};
  border-radius: ${({ radius }) => radius};
`;

export const BlockWithCirclSC = styled.div`
  position: absolute;
  top: 310px;
  left: 60px;

  padding: 48px 56px;

  background: ${Colors.INFOLIGHT};
  box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.12);
  border-radius: 12px;
`;

export const CircleSC = styled.div`
  width: 174px;
  height: 174px;
  border-radius: 50%;

  transform: rotate(-20deg);

  background: radial-gradient(${Colors.INFOLIGHT} 50%, transparent 41%),
    conic-gradient(
      ${Colors.SECONDARY} 0% 33%,
      ${Colors.PRIMARY} 33% 66%,
      ${Colors.LIGHTBLUE} 66% 100%
    );
`;

export const PersentsBlockSC = styled.div`
  display: flex;
  flex-direction: column;

  row-gap: 12px;
  margin-top: 22px;
`;

export const PersentsContainerSC = styled.div`
  display: flex;
  align-items: center;

  column-gap: 8px;
`;
export const DotSC = styled.div<IProps>`
  width: 5px;
  height: 5px;

  border-radius: 50px;
  background-color: ${({ background }) => background};
`;
export const PersentTextSC = styled.p`
  font-size: 14px;
  line-height: 24px;
  font-family: "Manrope";
  font-style: normal;
`;
