import { checkIfFileExists, getPostData } from "./utils";
import { createFile } from "../shared";

export const publishArticle = async (postId: string): Promise<void> => {
  const postData = await getPostData(postId);
  const isExistingFile = await checkIfFileExists(postData);
  if (isExistingFile) return;

  await createFile({ postData });
};
