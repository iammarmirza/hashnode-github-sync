import { Octokit } from "@octokit/rest";
const matter = require('gray-matter');
const { Base64 } = require("js-base64")
const github = require("@actions/github");

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export const createFile = async (data) => {
  const post = data.publication.post
  try {
    const fileName = `${post.slug}.md`
    console.log(matter.stringify(post.content.markdown, post))
    const fileContent = post.content.markdown
    const contentEncoded = Base64.encode()
    const { data } = await octokit.repos.createOrUpdateFileContents({
      owner: "iammarmirza",
      repo: "github-actions-test",
      path: "OUTPUT.md",
      branch: "main",
      message: "feat: Added OUTPUT.md programatically",
      content: contentEncoded,
      committer: {
        name: `Ammar Mirza`,
        email: "itsammarmirza@gmail.com",
      },
      author: {
        name: "Ammar Mirza",
        email: "itsammarmirza@gmail.com",
      },
    });

    console.log(data);
  } catch (err) {
    console.error(err);
  }
};
