import { parseFile, callGraphqlAPI, QUERY } from "src/shared";
import { GithubToHashnodeSync, ModifiedArticle } from "src/shared/types";
import { extractInfoFromFilename, mapMdToGqlModifyInput } from "./utils";

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
    `Post successfully modified on Hashnode with ID - ${response.data.updatePost.post.id} & Title - ${response.data.updatePost.post.title}`
  );
  return response;
};
