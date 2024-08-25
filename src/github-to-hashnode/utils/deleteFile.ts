import { octokit } from "../../hashnode-to-github/utils/octokit";
import { context } from "@actions/github";

export const deleteFile = async (slug: string) => {
  try {
    const {
      data: { sha },
    } = await octokit.request(
      "GET /repos/{owner}/{repo}/contents/{file_path}",
      {
        owner: context.repo.owner,
        repo: context.repo.repo,
        file_path: `${slug}.md`,
      }
    );

    await octokit.rest.repos.deleteFile({
      owner: context.repo.owner,
      repo: context.repo.repo,
      path: `${slug}.md`,
      message: `File deleted for recreation.`,
      sha,
    });
  } catch (error: any) {
    console.log(error.message);
  }
};
