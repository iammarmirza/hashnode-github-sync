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
      repo: 'example',
      path: "",
    });
  } catch (error: any){
    console.log(error.message)
  }
};
