import { createFile } from "./createFile";
import { getPostData } from "./getPostData";
import { context } from "@actions/github";
import { octokit } from "./octokit";
import { getPostSlug } from "./getPostSlug";


export const modifyArticle = async ({
  publicationId,
  postId,
}: {
  publicationId: string;
  postId: string;
}) => {
  const slug = await getPostSlug(postId)
  const postData = await getPostData({ publicationId, slug });
  const {
    data: { sha },
  } = await octokit.request("GET /repos/{owner}/{repo}/contents/{file_path}", {
    owner: context.repo.owner,
    repo: context.repo.repo,
    file_path: `${postData.publication.post.slug}.md`,
  });
  createFile({ postData, sha });
};
