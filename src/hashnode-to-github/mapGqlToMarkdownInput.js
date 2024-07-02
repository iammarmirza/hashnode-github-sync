export const mapGqlToMarkdownInput = (data) => {
    const input = {
        title: data.publication.post.title,
        subtitle: data.publication.post.subtitle || undefined,
        publicationId: data.publication.id,
        publishedAt: data.publication.post.publishedAt || undefined,
        coverImageOptions: data.publication.post.coverImage ? {
            coverImageURL: data.publication.post.coverImage.url,
            isCoverAttributionHidden: data.publication.post.coverImage.isAttributionHidden,
            stickCoverToBottom: data.publication.post.preferences.stickCoverToBottom
        } : undefined,
        slug: data.publication.post.slug || undefined,
        tags: data.publication.post.tags || undefined,
        disableComments: data.publication.post.preferences.disableComments,
        metaTags: {},
        seriesId: data.publication.post.series ? data.publication.post.series.id : undefined,
        settings: {
            delisted: data.publication.post.preferences.isDelisted,
            enableTableOfContent: data.publication.post.features.tableOfContents.isEnabled
        },
        coAuthors: data.publication.post.coAuthors || undefined
      };

      const filteredInput = Object.fromEntries(
        Object.entries(input)
          .filter(([key, value]) => value !== undefined)
      );

      if(data.publication.post.seo.title) filteredInput.metaTags.title = data.publication.post.seo.title
      if(data.publication.post.seo.description) filteredInput.metaTags.description =  data.publication.post.seo.description
      if(data.publication.post.ogMetaData.image) filteredInput.metaTags.image = data.publication.post.ogMetaData.image

      if(data.publication.post.coverImage.attribution) filteredInput.coverImageOptions.coverImageAttribution = data.publication.post.coverImage.attribution
      if(data.publication.post.coverImage.photographer) filteredInput.coverImageOptions.coverImagePhotographer = data.publication.post.coverImage.photographer
    return filteredInput
}