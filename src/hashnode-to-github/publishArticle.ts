import {
  checkIfFileExists,
  createFile,
  deleteFile,
  getPostData,
  octokit,
} from "./utils";
import { context } from "@actions/github";

export const publishArticle = async (postId: string): Promise<void> => {
  const postData = await getPostData(postId);
  const isExistingFile = await checkIfFileExists(postData);
  if (isExistingFile) {
    const {
      data: { sha },
    } = await octokit.request(
      "GET /repos/{owner}/{repo}/contents/{file_path}",
      {
        owner: context.repo.owner,
        repo: context.repo.repo,
        file_path: `${postData.post.slug}.md`,
      }
    );
    await deleteFile({ postData, sha });
  }

  await createFile({ postData });
};
