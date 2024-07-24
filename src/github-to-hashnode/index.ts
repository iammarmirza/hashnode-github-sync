import { getPublicationId } from "../shared/getPublicationId";
import { getInput } from "../shared/getInput";
import { publishArticle } from "./publishArticle";
import { modifyArticle } from "./modifyArticle";
import { deleteArticle } from "./deleteArticle";

export const githubToHashnodeSync = async () => {
    const { added_files, modified_files, deleted_files } = getInput()
    const publicationId = await getPublicationId();

    const added_files_arr = added_files
        .split(" ")
        .filter((fileName: string) => fileName.endsWith(".md"));

      const publishPromises = added_files_arr.map((file: string) => 
        publishArticle({file, publicationId})
      );
      await Promise.all(publishPromises);

      const modified_files_arr = modified_files
        .split(" ")
        .filter((fileName: string) => fileName.endsWith(".md"));

      const modifyPromises = modified_files_arr.map((file: string) =>
        modifyArticle({file, publicationId})
      );
      await Promise.all(modifyPromises);

      const deleted_files_arr = deleted_files
        .split(" ")
        .filter((fileName: string) => fileName.endsWith(".md"));

      const deletePromises = deleted_files_arr.map((file: string) =>
        deleteArticle({file, publicationId})
      );
      await Promise.all(deletePromises);
}

export default githubToHashnodeSync