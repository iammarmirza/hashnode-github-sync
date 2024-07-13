export interface ModifiedArticle {
  data: Data;
}

export interface Data {
  updatePost: UpdatePost;
}

export interface UpdatePost {
  post: Post;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
}
