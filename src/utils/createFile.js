import { Octokit } from "@octokit/rest";

const github = require("@actions/github");

const octokit = new Octokit({
    auth: `${process.env.GITHUB_TOKEN}`
})

export const createFile = async () => {
  try {
    const { data } = await octokit.repos.createOrUpdateFileContents({
      owner: "iammarmirza",
      repo: "github-actions-test",
      path: "OUTPUT.md",
      message: "feat: Added OUTPUT.md programatically",
      content: "test",
    });

    console.log(data);
  } catch (err) {
    console.error(err);
  }
};
