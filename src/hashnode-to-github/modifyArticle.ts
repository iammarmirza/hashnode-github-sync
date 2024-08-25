import { getPostData, octokit } from "./utils";
import { createFile } from "../shared";
import { context } from "@actions/github";

export const modifyArticle = async (postId: string) => {
  const postData = await getPostData(postId);
  const {
    data: { sha },
  } = await octokit.request("GET /repos/{owner}/{repo}/contents/{file_path}", {
    owner: context.repo.owner,
    repo: context.repo.repo,
    file_path: `${postData.post.id}-${postData.post.slug}.md`,
  });
  await createFile({ postData, sha });
};
