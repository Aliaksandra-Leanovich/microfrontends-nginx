import styled from "@emotion/styled";
import { media } from "../../ui";
import { IProps, IPropsOpen } from "./types";

export const SectionSC = styled.section`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ContainerSC = styled.div`
  max-width: 1400px;
  width: 100%;

  padding: 124px 160px 0;
`;

export const ContainerImageSC = styled.div<IProps>`
  max-width: 1100px;
  width: 100%;
  height: 403px;

  border-radius: 24px;
  background-image: url(${({ background }) => background});
  background-position: center;
  background-repeat: no-repeat;
`;

export const ContainerInformationSC = styled.div`
  display: flex;

  column-gap: 100px;
  margin-top: 56px;

  ${media.LAPTOP} {
    column-gap: 0;
    row-gap: 30px;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const DescriptionSC = styled.p`
  font-size: 36px;
  line-height: 56px;
`;

export const DropdownsContainerSC = styled.div`
  max-width: 500px;
  width: 100%;

  display: flex;
  flex-direction: column;
  row-gap: 32px;
`;

export const DescriptionBlockSC = styled.div`
  max-width: 500px;
  width: 100%;
`;

export const DropdownContainerSC = styled.div`
  width: 100%;

  padding-bottom: 16px;

  border-bottom: 1px solid #c4c4c4;

  display: flex;
  flex-direction: column;
`;

export const DropdownSC = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DropdownDescriptionSC = styled.div<IPropsOpen>`
  transition: display 0.5s ease-in-out;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
`;

export const DropdownButtonSC = styled.button<IPropsOpen>`
  transition: transform 0.3s linear;
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0)")};
`;
