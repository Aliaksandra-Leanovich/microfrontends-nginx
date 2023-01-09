import styled from "@emotion/styled";
import { media } from "../../ui";
import { IProps, IPropsButton } from "./types";

export const SectionSC = styled.section`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 158px;
`;

export const ContainerSC = styled.div`
  max-width: 1400px;
  width: 100%;

  padding: 0 100px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleContainerSC = styled.div`
  text-align: center;
  margin-top: 12px;
`;

export const ContainerOfBlocksSC = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 300px);
  justify-content: center;

  column-gap: 100px;
  row-gap: 80px;

  width: 100%;
  margin-top: 80px;

  ${media.LAPTOP} {
    grid-template-columns: repeat(2, 300px);

    column-gap: 50px;
    row-gap: 40px;
  }
`;

export const ImageSC = styled.div<IProps>`
  width: 100%;
  max-width: 300px;
  height: 209px;

  border-radius: 12px;
  background-image: url(${({ background }) => background});
  background-position: center;
  background-repeat: no-repeat;
`;

export const BlockSC = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  max-width: 300px;
  width: 100%;
`;

export const CategoryBlockSC = styled.div`
  display: flex;

  column-gap: 12px;
  margin-top: 24px;
`;

export const AuthorInformation = styled.div`
  display: flex;
  align-items: center;

  column-gap: 12px;
  margin-top: 20px;
`;

export const LinkSC = styled.button<IPropsButton>`
  margin-top: 84px;
  padding: 16px 56px;

  font-weight: 700;
  font-size: 20px;
  line-height: 28px;

  color: #0a2640;

  border: 2px solid #0a2640;
  border-radius: 56px;
  display: ${({ display }) => display};
`;

export const AuthorImageSC = styled.div<IProps>`
  width: 32px;
  height: 32px;

  border-radius: 50%;
  background-image: url(${({ background }) => background});
  background-position: center;
  background-repeat: no-repeat;
`;
