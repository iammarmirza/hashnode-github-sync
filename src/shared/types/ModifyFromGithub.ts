import { CoverImageOptions, MetaTags, TagsEntity } from "./PublishFromGithub";

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

interface UpdateSettings {
  isTableOfContentEnabled?: boolean;
  delisted?: boolean;
  disableComments?: boolean;
}

