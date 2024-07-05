import { octokit } from "./octokit";
import { context } from "@actions/github";
import { PublicationData } from "src/shared/types/Publication";

export const checkIfFileExists = async (postData: PublicationData) : Promise<boolean> => {
    const response = await octokit.request("GET /repos/{owner}/{repo}/contents/{file_path}", {
      owner: context.repo.owner,
      repo: context.repo.repo,
      file_path: `${postData.publication.post.slug}.md`,
    });

    return response.data.name ? true : false
  }