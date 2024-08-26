import { callGraphqlAPI, QUERY, parseFile, createFile } from "src/shared";
import { GithubToHashnodeSync, PublishedArticle } from "src/shared/types";
import { createSlug, mapMarkdownToGqlPublishInput } from "./utils";
import { deleteFile } from "src/hashnode-to-github/utils";

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
    `Post published successfully on Hashnode with ID - ${response.data.publishPost.post.id} & Title - ${response.data.publishPost.post.title}`
  );
  const post = response.data.publishPost.post;
  const postData = response.data.publishPost;
  const postSlug = post.slug;
  // we need to update file name with the id-slug.md format
  await deleteFile(postSlug);
  await createFile({ postData });
  return response;
};
