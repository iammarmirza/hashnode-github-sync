export interface DeletedArticle {
  data: Data;
}

interface Data {
  removePost: RemovePost;
}

interface RemovePost {
  post: Post;
}

interface Post {
  id: string;
  slug: string;
  title: string;
}
