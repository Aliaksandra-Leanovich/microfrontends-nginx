import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import AuthorImage1 from "../../assets/blogAuth1.svg";
import AuthorImage2 from "../../assets/blogAuth2.svg";
import AuthorImage3 from "../../assets/blogAuth3.svg";
import BlogImg2 from "../../assets/blogSection2.svg";
import BlogImg3 from "../../assets/blogSection3.svg";
import BlogImg1 from "../../assets/exploreImg1.svg";
import { TypographyVariants } from "../../enums";
import { Colors, Typography } from "../../ui";
import {
  AuthorImageSC,
  AuthorInformation,
  BlockSC,
  CategoryBlockSC,
  ContainerOfBlocksSC,
  ContainerSC,
  ImageSC,
  LinkSC,
  SectionSC,
  TitleContainerSC,
} from "./style";

const config = [
  {
    category: "blog.card.category",
    date: "blog.card.date",
    description: "first",
    authorName: "Chandler Bing",
    authorImage: AuthorImage1,
    image: BlogImg1,
  },
  {
    category: "blog.card.category",
    date: "blog.card.date",
    description: "second",
    authorName: "Rachel Green",
    authorImage: AuthorImage2,
    image: BlogImg2,
  },
  {
    category: "blog.card.category",
    date: "blog.card.date",
    description: "third",
    authorName: "Monica Geller",
    authorImage: AuthorImage3,
    image: BlogImg3,
  },

  {
    category: "blog.card.category",
    date: "blog.card.date",
    description: "first",
    authorName: "Rachel Green",
    authorImage: AuthorImage2,
    image: BlogImg2,
  },
  {
    category: "blog.card.category",
    date: "blog.card.date",
    description: "second",
    authorName: "Chandler Bing",
    authorImage: AuthorImage1,
    image: BlogImg1,
  },
  {
    category: "blog.card.category",
    date: "blog.card.date",
    description: "third",
    authorName: "Monica Geller",
    authorImage: AuthorImage3,
    image: BlogImg3,
  },
];

export const BlogSection = () => {
  const [index, setIndex] = useState(3);
  const { t } = useTranslation();

  const itemsToRender = config.slice(0, index);

  return (
    <SectionSC id="blog">
      <ContainerSC>
        <Typography variant={TypographyVariants.paragraphS} color={Colors.GRAY}>
          {t("blog.title")}
        </Typography>
        <TitleContainerSC>
          <Typography variant={TypographyVariants.h3}>
            {t("blog.subtitle")}
          </Typography>
        </TitleContainerSC>

        <ContainerOfBlocksSC>
          {itemsToRender.map((block, index) => (
            <BlockSC key={index}>
              <div>
                <ImageSC background={block.image} />

                <CategoryBlockSC>
                  <Typography
                    variant={TypographyVariants.paragraphXSBold}
                    color={Colors.PRIMARY}
                  >
                    {t("blog.card.category")}
                  </Typography>
                  <Typography
                    variant={TypographyVariants.paragraphXS}
                    color={Colors.GRAY}
                  >
                    {t(`${block.date}`)}
                  </Typography>
                </CategoryBlockSC>
                <Typography
                  variant={TypographyVariants.paragraphS}
                  color={Colors.INFODARK}
                >
                  {t(`blog.card.text.${block.description}`)}
                </Typography>
              </div>

              <AuthorInformation>
                <AuthorImageSC background={block.authorImage} />
                <Typography
                  variant={TypographyVariants.paragraphXS}
                  color={Colors.INFODARK}
                >
                  {block.authorName}
                </Typography>
              </AuthorInformation>
            </BlockSC>
          ))}
        </ContainerOfBlocksSC>

        <LinkSC
          onClick={() => setIndex(index + 3)}
          display={index > 3 ? "none" : "block"}
        >
          {t("blog.button")}
        </LinkSC>
      </ContainerSC>
    </SectionSC>
  );
};
