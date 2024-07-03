import * as core from '@actions/core';
import { getInput } from "./shared/getInput";
import { githubToHashnodeSync } from "./github-to-hashnode/githubToHashnodeSync";
import { hashnodeToGithubSync } from "./hashnode-to-github/hashnodeToGithubSync";

export async function run() {
  try {
    const {hashnode_event, added_files, modified_files, deleted_files} = getInput()
    const parsedEvent = JSON.parse(hashnode_event)

    if (parsedEvent) hashnodeToGithubSync(parsedEvent)
    else githubToHashnodeSync() 

  } catch (error: any) {
    core.setFailed(error.message);
  }
}
run();
