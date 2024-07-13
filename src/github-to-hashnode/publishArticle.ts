import { callGraphqlAPI } from "../shared/callGraphqlAPI";
import { QUERY } from "../shared/constants";
import { mapMarkdownToGqlPublishInput } from "./mapMdToGqlPublishInput";
import { parseFile } from "../shared/parseFile";
import { createSlug } from "../shared/createSlug";
import { PublishedArticle } from "src/shared/types/PublishedArticleTypes";
import { GithubToHashnodeSync } from "src/shared/types";

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
    }
  });
  console.log(`Post published successfully on Hashnode with slug ${response.data.publishPost.post.slug}`);
  return response
};
