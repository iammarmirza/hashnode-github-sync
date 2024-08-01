export interface PublishedArticle {
  data: Data;
}

interface Data {
  publishPost: PublishPost;
}

interface PublishPost {
  post: Post;
}

interface Post {
  cuid: string;
  id: string;
  title: string;
  slug: string;
}
