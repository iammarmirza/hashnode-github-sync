import { createSlug } from "../shared/createSlug";
import { getPostId } from "../shared/getPostID";
import { mapMdToGqlDeleteInput } from "./mapMdToGqlDeleteInput";
import { QUERY } from "../shared/constants";
import { callGraphqlAPI } from "../shared/callGraphqlAPI";
import { GithubToHashnodeSync } from "src/shared/types";
import { DeleteArticle } from "src/shared/types/DeleteArticleTypes";

export const deleteArticle = async ({
  file,
  publicationId,
}: GithubToHashnodeSync): Promise<DeleteArticle> => {
  const slug = createSlug(file);
  const postId = await getPostId({ publicationId, slug });
  const input = mapMdToGqlDeleteInput(postId);

  const response = await callGraphqlAPI({
    query: QUERY.delete,
    variables: {
      input,
    }
  });

  console.log(`Post successfully deleted on Hashnode with slug ${response.data.removePost.post.slug}`)
  return response
};
