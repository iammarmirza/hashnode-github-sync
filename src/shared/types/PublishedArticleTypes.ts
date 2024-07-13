export interface PublishedArticle {
  data: Data;
}

export interface Data {
  publishPost: PublishPost;
}

export interface PublishPost {
  post: Post;
}

export interface Post {
  cuid: string;
  id: string;
  title: string;
  slug: string;
}
