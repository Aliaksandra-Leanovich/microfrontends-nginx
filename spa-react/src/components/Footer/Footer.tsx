import { useTranslation } from "react-i18next";
import { Colors } from "../../ui";
import { Logo } from "../Logo";
import {
  BlockWithLinksSC,
  BlockWithLogoSC,
  CategoryLinkSC,
  ContainerLinkSC,
  ContainerSC,
  Description,
  LabelSC,
  LinksSC,
  RightsSC,
  StyledFooterSC,
  SubcategorydLinkSC,
  WrapperSC,
} from "./styles";

const config = [
  {
    category: "first",
    link: "#products",
    subcategories: [
      { name: "first", link: "#products" },
      { name: "second", link: "#products" },
      { name: "third", link: "#services" },
    ],
  },
  {
    category: "second",
    link: "#services",
    subcategories: [
      { name: "first", link: "#blog" },
      { name: "second", link: "#products", label: "footer.label" },
      { name: "third", link: "#services" },
    ],
  },
  {
    category: "third",
    link: "#blog",
    subcategories: [
      { name: "first", link: "#blog" },
      { name: "second", link: "#products" },
      { name: "third", link: "#services" },
    ],
  },
];

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <StyledFooterSC>
      <WrapperSC>
        <ContainerSC>
          <BlockWithLogoSC>
            <Logo color={Colors.PRIMARY} background={Colors.PRIMARY} />
            <Description>{t("footer.text")}</Description>
            <RightsSC>{t("footer.rights")}</RightsSC>
          </BlockWithLogoSC>
          <BlockWithLinksSC>
            {config.map((category, index) => (
              <LinksSC key={index}>
                <CategoryLinkSC href={category.link} key={index}>
                  {t(`footer.category.${category.category}`)}
                </CategoryLinkSC>
                {category.subcategories.map((subcategory, index) => (
                  <ContainerLinkSC key={index}>
                    <SubcategorydLinkSC>
                      {t(
                        `footer.subcategories.${category.category}.${subcategory.name}`
                      )}
                    </SubcategorydLinkSC>
                    {subcategory.label && (
                      <LabelSC>{t(subcategory.label)}</LabelSC>
                    )}
                  </ContainerLinkSC>
                ))}
              </LinksSC>
            ))}
          </BlockWithLinksSC>
        </ContainerSC>
      </WrapperSC>
    </StyledFooterSC>
  );
};
