import { context } from "@actions/github";
import { octokit } from "./octokit";

export const deleteArticle = async ({
  publicationId,
  postId,
}: {
  publicationId: string;
  postId: string;
}) => {
  try {
    const { data } = await octokit.repos.getContent({
      owner: context.repo.owner,
      repo: context.repo.repo,
      path: "",
    });

    if(!Array.isArray(data)) return

    const fileToDelete = data.forEach(file => {
      const isFileStartsWith = file.name.startsWith(postId)
      if(isFileStartsWith) return file.name
    });

    console.log(fileToDelete)
    
  } catch (error: any){
    console.log(error.message)
  }
};
