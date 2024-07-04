import { callGraphqlAPI } from "../shared/callGraphqlAPI";
import { QUERY } from "../shared/constants";
import { mapMarkdownToGqlPublishInput } from "./mapMdToGqlPublishInput";
import { parseFile } from "../shared/parseFile";
import { makeSlug } from "../shared/makeSlug";
import { PublishArticle } from "src/shared/types/PublishArticleTypes";
import { GithubToHashnodeSync } from "src/shared/types";

export const publishArticle = async ({
  file,
  hashnode_token,
  publicationId,
}: GithubToHashnodeSync): Promise<PublishArticle> => {
  const slug = makeSlug(file);
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
    token: hashnode_token,
  });
  console.log(`Post published successfully on Hashnode with slug ${await response.data.publishPost.post.slug}`);
  return response as PublishArticle
};
