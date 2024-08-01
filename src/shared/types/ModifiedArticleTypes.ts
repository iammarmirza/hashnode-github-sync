export interface ModifiedArticle {
  data: Data;
}

interface Data {
  updatePost: UpdatePost;
}

interface UpdatePost {
  post: Post;
}

interface Post {
  id: string;
  title: string;
  slug: string;
}
