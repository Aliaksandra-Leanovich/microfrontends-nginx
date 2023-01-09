import styled from "@emotion/styled";
import { Colors, media } from "../../ui";

export const StyledFooterSC = styled.footer`
  width: 100%;
`;

export const WrapperSC = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 100px;
`;

export const ContainerSC = styled.div`
  display: flex;
  column-gap: 180px;

  ${media.LAPTOP} {
    column-gap: 0;
    display: flex;
    flex-direction: column;

    row-gap: 30px;
  }
`;

export const BlockWithLogoSC = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;

  max-width: 300px;
  width: 100%;
`;

export const BlockWithLinksSC = styled.div`
  display: flex;
  column-gap: 96px;
`;

export const SubcategorydLinkSC = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;

  color: #777777;

  &:hover {
    color: ${Colors.PRIMARY};
  }
`;

export const CategoryLinkSC = styled.a`
  font-weight: 700;
  font-size: 20px;
  line-height: 32px;

  cursor: pointer;

  &:hover {
    color: ${Colors.SECONDARY};
  }
`;
export const LinksSC = styled.div`
  display: flex;
  flex-direction: column;

  width: 150px;
  row-gap: 32px;

  cursor: pointer;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;

  color: #777777;
`;

export const RightsSC = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;

  color: #777777;

  margin-top: 24px;
`;

export const LabelSC = styled.div`
  font-weight: 700;
  font-size: 13px;
  line-height: 28px;

  color: #0a2640;

  background: #65e4a3;
  border-radius: 120px;

  padding: 4px 14px;
  margin-left: 16px;
`;

export const ContainerLinkSC = styled.div`
  display: flex;
`;
