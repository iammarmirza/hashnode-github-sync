export const mapMarkdownToGqlInput = async (
  parsedArticle,
  publicationId,
  slug
) => {
  validateInput(parsedArticle);
  const input = {
    title: parsedArticle.data.title,
    subtitle: parsedArticle.data.subtitle || undefined,
    publicationId: publicationId,
    contentMarkdown: parsedArticle.content,
    publishedAt: parsedArticle.publishedAt || undefined,
    coverImageOptions: parsedArticle.coverImageOptions || undefined,
    slug: slug,
    originalArticleURL: parsedArticle.data.originalArticleURL || undefined,
    tags: parsedArticle.data.tags || undefined,
    disableComments: parsedArticle.data.disableComments || undefined,
    metaTags: parsedArticle.data.metaTags || undefined,
    publishAs: parsedArticle.data.publishAs || undefined,
    seriesId: parsedArticle.seriesId || undefined,
    settings: parsedArticle.data.settings || undefined,
    coAuthors: parsedArticle.data.coAuthors || undefined
  };

  const filteredInput = Object.fromEntries(
    Object.entries(input)
      .filter(([key, value]) => value !== undefined)
  );

  console.log(filteredInput)


  return input;
};

const validateInput = (parsedArticle) => {
  if (
    !parsedArticle.data.title ||
    !parsedArticle.content
  ) {
    throw new Error("Required Fields are not provided to Publish Post");
  }
};
