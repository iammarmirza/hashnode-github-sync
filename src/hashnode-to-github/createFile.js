import { Octokit } from "@octokit/rest";
import { mapGqlToMarkdownInput } from "./mapGqlToMarkdownInput";
const matter = require('gray-matter');
const { Base64 } = require("js-base64")
const github = require("@actions/github");

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export const createFile = async (postData) => {
  try {
    console.log('Level 2', postData)
    const post = postData.data.publication.post
    const fileName = `${post.slug}.md`
    const metaTags = mapGqlToMarkdownInput(postData)
    const fileContent = matter.stringify(post.content.markdown, metaTags)
    const contentEncoded = Base64.encode(fileContent)
    const { data } = await octokit.repos.createOrUpdateFileContents({
      owner: "iammarmirza",
      repo: "github-actions-test",
      path: fileName,
      branch: "main",
      message: "feat: Added Blog programatically",
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
