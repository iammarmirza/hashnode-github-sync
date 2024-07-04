import { isPublishedAtValid } from "src/shared/isPublishedAtValid";
import { ParsedContent, PostUpdateInput } from "src/shared/types";

export const mapMdToGqlModifyInput = ({
  parsedArticle,
  slug,
  postId,
  publicationId,
}: {
  parsedArticle: ParsedContent;
  slug: string;
  postId: string;
  publicationId: string;
}): PostUpdateInput => {
  
  const input = {
    id: postId,
    title: parsedArticle.data.title,
    subtitle: parsedArticle.data.subtitle,
    publicationId: publicationId,
    slug: slug,
    contentMarkdown: parsedArticle.content,
    publishedAt: isPublishedAtValid(parsedArticle.data.publishedAt),
    coverImageOptions: {
      coverImageURL: parsedArticle.data.coverImageUrl,
      isCoverAttributionHidden: parsedArticle.data.isCoverAttributionHidden,
      coverImageAttribution: parsedArticle.data.coverImageAttribution,
      coverImagePhotographer: parsedArticle.data.coverImagePhotographer,
      stickCoverToBottom: parsedArticle.data.stickCoverToBottom,
    },
    originalArticleUrl: parsedArticle.data.originalArticleURL,
    tags: parsedArticle.data.tags,
    metaTags: {
      title: parsedArticle.data.ogTitle,
      description: parsedArticle.data.ogDescription,
      image: parsedArticle.data.ogImage,
    },
    publishAs: parsedArticle.data.publishAs,
    coAuthors: parsedArticle.data.coAuthors,
    seriesId: parsedArticle.data.seriesId,
    settings: {
      isTableOfContentEnabled: parsedArticle.data.enableTableOfContent,
      delisted: parsedArticle.data.delisted,
      disableComments: parsedArticle.data.disableComments,
    },
  };
  return input;
};
