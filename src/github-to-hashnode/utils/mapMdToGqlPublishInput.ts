import { ParsedContent, PostPublishInput } from "src/shared/types";

export const mapMarkdownToGqlPublishInput = ({
  parsedArticle,
  publicationId,
  slug,
}: {
  parsedArticle: ParsedContent;
  publicationId: string;
  slug: string;
}): PostPublishInput => {
  const input = {
    title: parsedArticle.data.title,
    subtitle: parsedArticle.data.subtitle,
    publicationId: publicationId,
    contentMarkdown: parsedArticle.content,
    publishedAt: parsedArticle.data.publishedAt,
    coverImageOptions: {
      coverImageURL: parsedArticle.data.coverImageUrl,
      isCoverAttributionHidden: parsedArticle.data.isCoverAttributionHidden,
      coverImageAttribution: parsedArticle.data.coverImageAttribution,
      coverImagePhotographer: parsedArticle.data.coverImagePhotographer,
      stickCoverToBottom: parsedArticle.data.stickCoverToBottom
    },
    slug: slug,
    originalArticleURL: parsedArticle.data.originalArticleURL,
    tags: parsedArticle.data.tags,
    disableComments: parsedArticle.data.disableComments,
    metaTags: {
      title: parsedArticle.data.ogTitle,
      description: parsedArticle.data.ogDescription,
      image: parsedArticle.data.ogImage
    },
    publishAs: parsedArticle.data.publishAs,
    seriesId: parsedArticle.data.seriesId,
    settings: {
      scheduled: parsedArticle.data.scheduled,
      enableTableOfContent: parsedArticle.data.enableTableOfContent,
      slugOverridden: parsedArticle.data.slugOverridden,
      isNewsletterActivated: parsedArticle.data.isNewsletterActivated,
      delisted: parsedArticle.data.delisted
    },
    coAuthors: parsedArticle.data.coAuthors,
  };

  return input;
};
