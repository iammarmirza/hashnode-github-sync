import { getPostId } from "../shared/getPostID";
import { mapMdToGqlModifyInput } from "./mapMdToGqlModifyInput";
import { createSlug } from "../shared/createSlug";
import { parseFile } from "../shared/parseFile";
import { callGraphqlAPI } from "../shared/callGraphqlAPI";
import { QUERY } from "../shared/constants";
import { GithubToHashnodeSync } from "src/shared/types";
import { ModifyArticle } from "src/shared/types/ModifyArticleTypes";

export const modifyArticle = async ({
  file,
  hashnode_token,
  publicationId,
}: GithubToHashnodeSync): Promise<ModifyArticle> => {
  const slug = createSlug(file);
  const parsedArticle = await parseFile(file);
  const postId = await getPostId({ publicationId, slug });
  const input = mapMdToGqlModifyInput({
    parsedArticle,
    slug,
    postId,
    publicationId,
  });

  const response = await callGraphqlAPI({
    query: QUERY.modify,
    variables: {
      input,
    },
    token: hashnode_token,
  });

  console.log(`Post successfully modified on Hashnode with slug ${response.data.updatePost.post.slug}`)
  return response as ModifyArticle
};
