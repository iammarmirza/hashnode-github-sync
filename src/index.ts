import * as core from "@actions/core";
import { getInput } from "./shared/getInput";
import githubToHashnodeSync from "./github-to-hashnode";
import hashnodeToGithubSync from "./hashnode-to-github";

export async function run() {
  try {
    const { hashnode_event } = getInput();
    let parsedEvent;
    if (hashnode_event) parsedEvent = JSON.parse(hashnode_event);

    if (parsedEvent) await hashnodeToGithubSync(parsedEvent);
    else await githubToHashnodeSync();
  } catch (error: any) {
    core.setFailed(error.message);
  }
}
run();
