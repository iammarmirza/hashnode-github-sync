import { Octokit } from "@octokit/rest";
import { mapGqlToMarkdownInput } from "./mapGqlToMarkdownInput";
import { default as matter } from 'gray-matter'
import { Base64 } from "js-base64";
import { context } from "@actions/github";

const octokit = new Octokit({
  auth: `${process.env.GITHUB_TOKEN}`,
});

const put_ob_01 = {
  owner: context.repo.owner, repo: context.repo.repo, file_path: "hashnode-test-blg.md"
};

export const createFile = async (postData: any) => {
  try {
    const sha = await octokit.request('GET /repos/{owner}/{repo}/contents/{file_path}', put_ob_01)
    console.log(sha)
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
