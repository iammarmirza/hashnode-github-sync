import { getPublicationId } from "../shared/getPublicationId";
import { getInput } from "../shared/getInput";
import { publishArticle } from "./publishArticle";
import { modifyArticle } from "./modifyArticle";
import { deleteArticle } from "./deleteArticle";

export const githubToHashnodeSync = async () => {
  const { hashnode_token, added_files, modified_files, deleted_files } =
    getInput();
  const publicationId = await getPublicationId();

  const added_files_arr = added_files
    .split(" ")
    .filter((file: string) => file.endsWith(".md"));

  const publishPromises = added_files_arr.map((added_file: string) => {
    const file = getFilteredFile(added_file)!;
    publishArticle({ file, hashnode_token, publicationId });
  });
  await Promise.all(publishPromises);

  const modified_files_arr = modified_files
    .split(" ")
    .filter((file: string) => file.endsWith(".md"));

  const modifyPromises = modified_files_arr.map((modified_file: string) => {
    const file = getFilteredFile(modified_file)!;
    modifyArticle({ file, hashnode_token, publicationId });
  });
  await Promise.all(modifyPromises);

  const deleted_files_arr = deleted_files
    .split(" ")
    .filter((file: string) => file.endsWith(".md"));

  const deletePromises = deleted_files_arr.map((deleted_file: string) => {
    const file = getFilteredFile(deleted_file)!;
    deleteArticle({ file, hashnode_token, publicationId });
  });
  await Promise.all(deletePromises);
};

const getFilteredFile = (file: string) => {
  if (file.includes("/")) return file.split("/").pop();
  return file;
};
