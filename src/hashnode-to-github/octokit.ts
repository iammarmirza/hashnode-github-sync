import { Octokit } from "@octokit/rest";

let cachedOctokitClient: Octokit | null = null;

function getOctokit () {
  if(!cachedOctokitClient) {
    cachedOctokitClient = new Octokit({
      auth: `${process.env.GITHUB_TOKEN}`,
    });
  }
  return cachedOctokitClient
}

export const octokit = getOctokit()