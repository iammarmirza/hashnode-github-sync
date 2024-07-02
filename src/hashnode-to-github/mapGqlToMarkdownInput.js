export const mapGqlToMarkdownInput = (data) => {
    const input = {
        title: data.publication.post.title,
        subtitle: data.publication.post.subtitle || undefined,
        publicationId: data.publication.id,
        publishedAt: data.publication.post.publishedAt || undefined,
        coverImageOptions: data.publication.post.coverImage ? {
            coverImageURL: data.publication.post.coverImage.url || undefined,
            isCoverAttributionHidden: data.publication.post.coverImage.isAttributionHidden,
            coverImageAttribution: data.publication.post.coverImage.attribution || undefined,
            coverImagePhotographer: data.publication.post.coverImage.photographer || undefined,
            stickCoverToBottom: data.publication.post.preferences.stickCoverToBottom
        } : undefined,
        slug: data.publication.post.slug || undefined,
        tags: data.publication.post.tags || undefined,
        disableComments: data.publication.post.preferences.disableComments,
        metaTags: {
            title: data.publication.post.seo.title || undefined,
            description: data.publication.post.seo.description || undefined,
            image: data.publication.post.ogMetaData.image || undefined
        },
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
    
      console.log('filteredInput', filteredInput)

    return input
}