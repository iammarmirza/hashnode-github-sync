import { checkIfFileExists } from "./checkIfFileExists";
import { createFile } from "./createFile";
import { deleteFile } from "./deleteFile";
import { getPostData } from "./getPostData";
import { getPostSlug } from "./getPostSlug";
import { octokit } from "./octokit";
import { context } from "@actions/github";

export const publishArticle = async ({
  publicationId,
  postId,
}: {
  publicationId: string;
  postId: string;
}): Promise<void> => {
  const slug = await getPostSlug(postId);
  const postData = await getPostData({ publicationId, slug });
  const isExistingFile = await checkIfFileExists(postData);
  if (isExistingFile) {
    const {
      data: { sha },
    } = await octokit.request(
      "GET /repos/{owner}/{repo}/contents/{file_path}",
      {
        owner: context.repo.owner,
        repo: context.repo.repo,
        file_path: `${postData.publication.post.slug}.md`,
      }
    );
    await deleteFile({ postData, sha });
  }
  
  await createFile({ postData });
};
