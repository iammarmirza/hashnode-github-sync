import { octokit } from "./octokit";
import { context } from "@actions/github";
import { PublicationData } from "src/shared/types/Publication";

export const checkIfFileExists = async (postData: PublicationData) : Promise<boolean> => {
    const result = await octokit.request("GET /repos/{owner}/{repo}/contents/{file_path}", {
      owner: context.repo.owner,
      repo: context.repo.repo,
      file_path: `${postData.publication.post.slug}.md`,
    });
  
    console.log(result)
    if(result) return true
    else return false
  }