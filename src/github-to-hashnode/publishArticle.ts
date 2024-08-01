import { callGraphqlAPI, QUERY, parseFile } from "src/shared";
import { GithubToHashnodeSync, PublishedArticle } from "src/shared/types";
import { createSlug, mapMarkdownToGqlPublishInput } from "./utils";

export const publishArticle = async ({
  file,
  publicationId,
}: GithubToHashnodeSync): Promise<PublishedArticle> => {
  const slug = createSlug(file);
  const parsedArticle = await parseFile(file);
  const input = mapMarkdownToGqlPublishInput({
    parsedArticle,
    publicationId,
    slug,
  });
  const response = await callGraphqlAPI({
    query: QUERY.publish,
    variables: {
      input,
    },
  });
  console.log(
    `Post published successfully on Hashnode with slug ${response.data.publishPost.post.slug}`
  );
  return response;
};
