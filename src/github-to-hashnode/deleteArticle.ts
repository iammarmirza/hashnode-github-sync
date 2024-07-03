import { makeSlug } from "../shared/makeSlug";
import { getPostId } from "../shared/getPostID";
import { getInputToDeletePost } from "./getInputToDeletePost";
import { QUERY } from "../shared/constants";
import { callGraphqlAPI } from "../shared/callGraphqlAPI";

export const deleteArticle = async ({
  file,
  hashnode_token,
  publicationId,
}: {
  file: string;
  hashnode_token: string;
  publicationId: string;
}) => {
  const slug = makeSlug(file);
  const postId = await getPostId({publicationId, slug});
  const input = await getInputToDeletePost(postId);

  const response = await callGraphqlAPI({
    query: QUERY.delete,
    variables: {
      input,
    },
    token: hashnode_token,
  });

  return response;
};
