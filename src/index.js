import { getInput } from "./utils/getInput";
import { githubToHashnodeSync } from "./utils/githubToHashnodeSync";
import { hashnodeToGithubSync } from "./utils/hashnodeToGithubSync";

export async function run() {
  try {
    const {hashnode_event} = getInput()
    const parsedEvent = JSON.parse(hashnode_event)

    if (parsedEvent) hashnodeToGithubSync(parsedEvent)
    else githubToHashnodeSync() 

  } catch (error) {
    core.setFailed(error.message);
  }
}
run();
