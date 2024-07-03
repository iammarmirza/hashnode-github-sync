export const getInputToModifyPost = async ({parsedArticle, slug, postId}: {
  parsedArticle: any,
  slug: string,
  postId: string | number
}) => {
  const input = {
    id: postId,
    title: parsedArticle.data.title,
    slug: slug,
    contentMarkdown: parsedArticle.content,
    publishedAt: parsedArticle.data.publishedAt || undefined,
    coverImageOptions: parsedArticle.data.coverImageOptions || undefined,
    originalArticleUrl: parsedArticle.data.originalArticleURL || undefined,
    tags: parsedArticle.data.tags || undefined,
    metaTags: parsedArticle.data.metaTags || undefined,
    publishAs: parsedArticle.data.publishAs || undefined,
    coAuthors: parsedArticle.data.coAuthors || undefined,
    seriesId: parsedArticle.data.seriesId || undefined,
    settings: parsedArticle.data.settings || undefined,
    publicationId: parsedArticle.data.publicationId || undefined
  }
    return input;
  };