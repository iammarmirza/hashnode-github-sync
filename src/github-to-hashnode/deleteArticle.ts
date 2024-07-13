import { mapMdToGqlDeleteInput } from "./mapMdToGqlDeleteInput";
import { QUERY } from "../shared/constants";
import { callGraphqlAPI } from "../shared/callGraphqlAPI";
import { GithubToHashnodeSync } from "src/shared/types";
import { DeletedArticle } from "src/shared/types/DeletedArticleTypes";
import { extractInfoFromFilename } from "./extractInfoFromFilename";

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
