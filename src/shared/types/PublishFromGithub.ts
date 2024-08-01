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
