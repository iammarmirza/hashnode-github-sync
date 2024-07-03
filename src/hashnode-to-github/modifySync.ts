import { createFile } from "./createFile";
import { getPostData } from "./getPostData";
import { context } from "@actions/github";
import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
  auth: `${process.env.GITHUB_TOKEN}`,
});

export const modifySync = async ({
  publicationId,
  postSlug,
}: {
  publicationId: string;
  postSlug: string;
}) => {
  const postData = await getPostData({ publicationId, postSlug });
  const {
    data: { sha },
  } = await octokit.request("GET /repos/{owner}/{repo}/contents/{file_path}", {
    owner: context.repo.owner,
    repo: context.repo.repo,
    file_path: `${postData.publication.post.slug}.md`,
  });
  createFile({ postData, sha });
};
