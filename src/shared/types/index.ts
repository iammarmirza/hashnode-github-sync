export interface PostPublishInput {
  title: string;
  subtitle?: string;
  publicationId: string;
  contentMarkdown: string;
  publishedAt?: string;
  coverImageOptions?: CoverImageOptions;
  slug: string;
  originalArticleURL?: string;
  tags?: TagsEntity[] | null;
  disableComments?: boolean;
  metaTags?: MetaTags;
  publishAs?: string;
  seriesId?: string;
  settings?: PostSettings;
  coAuthors?: string[] | null;
}
export interface CoverImageOptions {
  coverImageURL?: string;
  isCoverAttributionHidden?: boolean;
  coverImageAttribution?: string;
  coverImagePhotographer?: string;
  stickCoverToBottom?: boolean;
}
export interface TagsEntity {
  id: string;
  slug: string;
  name: string;
}
export interface MetaTags {
  title?: string;
  description?: string;
  image?: string;
}
export interface PostSettings {
  scheduled?: boolean;
  enableTableOfContent?: boolean;
  slugOverridden?: boolean;
  isNewsletterActivated?: boolean;
  delisted?: boolean;
}

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

export interface PostUpdateInput {
  id: string;
  title?: string;
  subtitle?: string;
  contentMarkdown?: string;
  publishedAt?: string;
  coverImageOptions?: CoverImageOptions;
  slug?: string;
  originalArticleURL?: string;
  tags?: TagsEntity[] | null;
  metaTags?: MetaTags;
  publishAs?: string;
  coAuthors?: string[] | null;
  seriesId?: string;
  settings?: UpdateSettings;
  publicationId?: string;
}


export interface UpdateSettings {
    isTableOfContentEnabled?: boolean;
    delisted?: boolean;
    disableComments?: boolean;
  }