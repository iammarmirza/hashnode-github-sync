export type ParsedContent = {
    data: FrontMatter;
    content: string;
  };
  
  export type FrontMatter = {
    title: string;
    subtitle?: string;
    publishedAt?: string;
    coverImageUrl?: string;
    isCoverAttributionHidden?: boolean;
    coverImageAttribution?: string;
    coverImagePhotographer?: string;
    stickCoverToBottom?: boolean;
    originalArticleURL?: string;
    disableComments?: boolean;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    tags?: Tag[];
    publishAs?: string;
    seriesId?: string;
    delisted?: boolean;
    enableTableOfContent?: boolean;
    isNewsletterActivated?: boolean;
    scheduled?: boolean;
    slugOverridden?: boolean;
    coAuthors?: string[];
  };
  
  export type Tag = {
    id: string;
    name: string;
    slug: string;
  };
  