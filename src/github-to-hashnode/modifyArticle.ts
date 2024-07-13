import { mapMdToGqlModifyInput } from "./mapMdToGqlModifyInput";
import { parseFile } from "../shared/parseFile";
import { callGraphqlAPI } from "../shared/callGraphqlAPI";
import { QUERY } from "../shared/constants";
import { GithubToHashnodeSync } from "src/shared/types";
import { ModifiedArticle } from "src/shared/types/ModifiedArticleTypes";
import { extractInfoFromFilename } from "./extractInfoFromFilename";

export const modifyArticle = async ({
  file,
  publicationId,
}: GithubToHashnodeSync): Promise<ModifiedArticle> => {
  const { slug, postId } = extractInfoFromFilename(file);
  const parsedArticle = await parseFile(file);
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
  });

  console.log(
    `Post successfully modified on Hashnode with slug ${response.data.updatePost.post.slug}`
  );
  return response;
};
