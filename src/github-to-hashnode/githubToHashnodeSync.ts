import { getPublicationId } from "../shared/getPublicationId";
import { getInput } from "../shared/getInput";
import { publishArticle } from "./publishArticle";
import { modifyArticle } from "./modifyArticle";
import { deleteArticle } from "./deleteArticle";

export const githubToHashnodeSync = async () => {
    const { hashnode_token, added_files, modified_files, deleted_files } = getInput()
    const publicationId = await getPublicationId();

    const added_files_arr = added_files
        .split(" ")
        .filter((file: string) => file.endsWith(".md"));

      const publishPromises = added_files_arr.map((file: string) => 
        publishArticle({file, hashnode_token, publicationId})
      );
      await Promise.all(publishPromises);

      const modified_files_arr = modified_files
        .split(" ")
        .filter((file: string) => file.endsWith(".md"));

      const modifyPromises = modified_files_arr.map((file: string) =>
        modifyArticle({file, hashnode_token, publicationId})
      );
      await Promise.all(modifyPromises);

      const deleted_files_arr = deleted_files
        .split(" ")
        .filter((file: string) => file.endsWith(".md"));

      const deletePromises = deleted_files_arr.map((file: string) =>
        deleteArticle({file, hashnode_token, publicationId})
      );
      await Promise.all(deletePromises);
}