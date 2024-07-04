import { makeSlug } from "../shared/makeSlug";
import { getPostId } from "../shared/getPostID";
import { mapMdToGqlDeleteInput } from "./mapMdToGqlDeleteInput";
import { QUERY } from "../shared/constants";
import { callGraphqlAPI } from "../shared/callGraphqlAPI";
import { GithubToHashnodeSync } from "src/shared/types";
import { DeleteArticle } from "src/shared/types/DeleteArticleTypes";

export const deleteArticle = async ({
  file,
  hashnode_token,
  publicationId,
}: GithubToHashnodeSync): Promise<DeleteArticle> => {
  const slug = makeSlug(file);
  const postId = await getPostId({ publicationId, slug });
  const input = mapMdToGqlDeleteInput(postId);

  const response = await callGraphqlAPI({
    query: QUERY.delete,
    variables: {
      input,
    },
    token: hashnode_token,
  });

  console.log(`Post successfully deleted on Hashnode with slug ${response.data.removePost.post.slug}`)
  return response as DeleteArticle
};
