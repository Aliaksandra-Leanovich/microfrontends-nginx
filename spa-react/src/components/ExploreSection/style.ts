import styled from "@emotion/styled";
import { Colors, media } from "../../ui";

export const SectionSC = styled.section`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 12px;
`;

export const ContainerSC = styled.div`
  max-width: 1400px;
  width: 100%;

  padding: 0 100px;
`;

export const TitleSC = styled.h3`
  font-weight: 400;
  font-size: 48px;
  line-height: 72px;

  text-align: center;
`;

export const ContainerOfBlocksSC = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 300px);
  grid-gap: 100px;

  width: 100%;

  margin-top: 80px;

  ${media.LAPTOP} {
    grid-template-columns: repeat(2, 300px);
    grid-gap: 50px;
    row-gap: 30px;
  }
`;

export const ImageSC = styled.img`
  width: 100%;
`;

export const BlockSC = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 300px;
  width: 100%;
`;

export const TitleContainerSC = styled.div`
  margin: 24px 0 12px;
`;

export const LinkBlockSC = styled.div`
  max-width: 164px;
  width: 100%;

  margin-top: 28px;

  border-bottom: 1px solid ${Colors.PRIMARY};

  display: flex;
  justify-content: space-between;
  align-items: center;

  transition: border 0.5s ease-out, color 0.5s ease-out;

  &:hover {
    border-bottom: 1px solid ${Colors.SECONDARY};
    p {
      color: ${Colors.SECONDARY};
    }
  }
`;

export const LinkSC = styled.button`
  font-weight: 700;
  font-size: 20px;
  line-height: 36px;
  text-align: left;

  color: #0a2640;
`;
