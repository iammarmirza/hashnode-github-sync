export interface DeletedArticle {
  data: Data;
}

export interface Data {
  removePost: RemovePost;
}

export interface RemovePost {
  post: Post;
}

export interface Post {
  id: string;
  slug: string;
  title: string;
}
