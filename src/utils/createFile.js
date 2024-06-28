import fs from "fs-extra";
const github = require("@actions/github");

const octokit = github.getOctokit({
  auth: process.env.GITHUB_ACCESS_TOKEN,
});

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
