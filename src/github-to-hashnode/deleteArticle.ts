import { QUERY, callGraphqlAPI } from "src/shared";
import { extractInfoFromFilename, mapMdToGqlDeleteInput } from "./utils";
import { GithubToHashnodeSync, DeletedArticle } from "src/shared/types";

export const deleteArticle = async ({
  file
}: GithubToHashnodeSync): Promise<DeletedArticle> => {
  const { postId } = extractInfoFromFilename(file);
  const input = mapMdToGqlDeleteInput(postId);

  const response = await callGraphqlAPI({
    query: QUERY.delete,
    variables: {
      input,
    },
  });

  console.log(
    `Post successfully deleted on Hashnode with slug ${response.data.removePost.post.slug}`
  );
  return response;
};
