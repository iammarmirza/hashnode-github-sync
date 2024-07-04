import { Octokit } from "@octokit/rest";
import { context } from "@actions/github";
const octokit = new Octokit({
  auth: `${process.env.GITHUB_TOKEN}`,
});

export const getUser = async () => {
  const { data } = await octokit.request("GET /users/{owner}", {
    owner: context.repo.owner,
  });
  console.log(data)
};
