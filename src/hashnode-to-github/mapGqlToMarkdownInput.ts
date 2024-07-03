import { FrontMatter } from "src/shared/types";
import { PublicationData } from "src/shared/types/Publication";

export const mapGqlToMarkdownInput = (data: PublicationData): FrontMatter => {
  const frontMatter: FrontMatter = {
    title: data.publication.post.title,
    subtitle: data.publication.post.subtitle,
    publishedAt: data.publication.post.publishedAt,
    coverImageUrl: data.publication.post.coverImage?.url,
    isCoverAttributionHidden:
      data.publication.post.coverImage?.isAttributionHidden,
    coverImageAttribution: data.publication.post.coverImage?.attribution,
    coverImagePhotographer: data.publication.post.coverImage?.photographer,
    stickCoverToBottom: data.publication.post.preferences.stickCoverToBottom,
    tags: data.publication.post.tags,
    disableComments: data.publication.post.preferences.disableComments,
    ogTitle: data.publication.post.seo.title,
    ogDescription: data.publication.post.seo.description,
    ogImage: data.publication.post.ogMetaData.image,
    seriesId: data.publication.post.series?.id,
    delisted: data.publication.post.preferences.isDelisted,
    enableTableOfContent:
      data.publication.post.features.tableOfContents.isEnabled,
    coAuthors: data.publication.post.coAuthors,
  };

  const filteredFrontMatter = Object.fromEntries(
    Object.entries(frontMatter).filter(([key, value]) => value)
  );

  return filteredFrontMatter as FrontMatter;
};
