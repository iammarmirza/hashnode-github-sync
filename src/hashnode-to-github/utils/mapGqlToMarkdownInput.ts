import { FrontMatter, PostData } from "src/shared/types";

export const mapGqlToMarkdownInput = (data: PostData): FrontMatter => {
  const frontMatter: FrontMatter = {
    title: data.post.title,
    subtitle: data.post.subtitle,
    publishedAt: data.post.publishedAt,
    coverImageUrl: data.post.coverImage?.url,
    isCoverAttributionHidden:
      data.post.coverImage?.isAttributionHidden,
    coverImageAttribution: data.post.coverImage?.attribution,
    coverImagePhotographer: data.post.coverImage?.photographer,
    stickCoverToBottom: data.post.preferences.stickCoverToBottom,
    tags: data.post.tags,
    disableComments: data.post.preferences.disableComments,
    ogTitle: data.post.seo.title,
    ogDescription: data.post.seo.description,
    ogImage: data.post.ogMetaData.image,
    seriesId: data.post.series?.id,
    delisted: data.post.preferences.isDelisted,
    enableTableOfContent:
      data.post.features.tableOfContents.isEnabled,
    coAuthors: data.post.coAuthors,
  };

  const filteredFrontMatter = Object.fromEntries(
    Object.entries(frontMatter).filter(([key, value]) => value)
  );

  return filteredFrontMatter as FrontMatter;
};
