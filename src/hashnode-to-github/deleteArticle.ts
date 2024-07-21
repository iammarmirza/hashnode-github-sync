import { context } from "@actions/github";
import { octokit } from "./octokit";

export const deleteArticle = async ({
  postId,
}: {
  postId: string;
}) => {
  try {
    const { data } = await octokit.repos.getContent({
      owner: context.repo.owner,
      repo: context.repo.repo,
      path: "",
    });

    if(!Array.isArray(data)) return

    const fileToDelete = data.find(file => file.name.startsWith(postId))
    if(fileToDelete) {
      await octokit.repos.deleteFile({
        owner: context.repo.owner,
        repo: context.repo.repo,
        path: fileToDelete.name,
        sha: fileToDelete.sha,
        message: "Blog deleted from Hashnode side"
      })
    }
  } catch (error: any){
    console.log(error.message)
  }
};
