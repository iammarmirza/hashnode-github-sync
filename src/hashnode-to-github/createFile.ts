import { Octokit } from "@octokit/rest";
import { mapGqlToMarkdownInput } from "./mapGqlToMarkdownInput";
import { default as matter } from 'gray-matter'
import { Base64 } from "js-base64";
import { context } from "@actions/github";

const octokit = new Octokit({
  auth: `${process.env.GITHUB_TOKEN}`,
});

export const createFile = async (postData: any) => {
  try {
    const SHA = await octokit.request('GET /repos/{owner}/{repo}/contents/{file_path}', {
      owner: context.repo.owner,
      repo: context.repo.repo,
      file_path: `${postData.publication.post.slug}.md`
    })

    const post = postData.publication.post
    const fileName = `${post.slug}.md`
    const frontMatter = mapGqlToMarkdownInput(postData)
    const fileContent = matter.stringify(post.content.markdown, frontMatter)
    const contentEncoded = Base64.encode(fileContent)
    const { data } = await octokit.repos.createOrUpdateFileContents({
      owner: context.repo.owner,
      repo: context.repo.repo,
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
