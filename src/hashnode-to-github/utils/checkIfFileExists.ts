import { octokit } from "./octokit";
import { context } from "@actions/github";
import { PostData } from "src/shared/types";

export const checkIfFileExists = async (
  postData: PostData
): Promise<boolean> => {
  try {
    await octokit.request("GET /repos/{owner}/{repo}/contents/{file_path}", {
      owner: context.repo.owner,
      repo: context.repo.repo,
      file_path: `${postData.post.id}-${postData.post.slug}.md`,
    });

    return true;
  } catch {
    return false;
  }
};
