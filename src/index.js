import { getPublicationId } from "./api/getPublicationId";
import { deleteArticle } from "./utils/deleteArticle";
import { hashnodeSync } from "./utils/hashnodeSync";
import { modifyArticle } from "./utils/modifyArticle";
import { publishArticle } from "./utils/publishArticle";
const core = require("@actions/core");
const github = require("@actions/github");

export async function run() {
  try {
    const hashnode_event = core.getInput("hashnode_event");
    const hashnode_token = core.getInput("hashnode_token");
    const host = core.getInput("hashnode_host");
    const added_files = core.getInput("added_files");
    const modified_files = core.getInput("modified_files");
    const deleted_files = core.getInput("deleted_files");
    core.setSecret(hashnode_token);

    const publicationId = await getPublicationId(host);
    const eventType = hashnode_event.data.eventType ?? null

    if (eventType) {
      hashnodeSync(hashnode_event)
    }
    
    else {
      const added_files_arr = added_files
        .split(" ")
        .filter((file) => file.endsWith(".md"));
      const publishPromises = added_files_arr.map((added_file) =>
        publishArticle(added_file, hashnode_token, publicationId)
      );
      await Promise.all(publishPromises);

      const modified_files_arr = modified_files
        .split(" ")
        .filter((file) => file.endsWith(".md"));
      const modifyPromises = modified_files_arr.map((modified_file) =>
        modifyArticle(modified_file, hashnode_token, publicationId)
      );
      await Promise.all(modifyPromises);

      const deleted_files_arr = deleted_files
        .split(" ")
        .filter((file) => file.endsWith(".md"));
      const deletePromises = deleted_files_arr.map((deleted_file) =>
        deleteArticle(deleted_file, hashnode_token, publicationId)
      );
      await Promise.all(deletePromises);
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}
run();
