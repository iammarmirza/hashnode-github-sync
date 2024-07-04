import { Octokit } from "@octokit/rest";
import { mapGqlToMarkdownInput } from "./mapGqlToMarkdownInput";
import { default as matter } from 'gray-matter'
import { Base64 } from "js-base64";
import { context } from "@actions/github";
import { PublicationData } from "src/shared/types/Publication";
import { getUser } from "./getUser";

const octokit = new Octokit({
  auth: `${process.env.GITHUB_TOKEN}`,
});

export const createFile = async ({postData, sha}: {
  postData: PublicationData,
  sha?: string
}) => {
  try {
    const userDetails = await getUser()
    console.log(userDetails)
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
      message: `Added Blog ${fileName} programatically`,
      content: contentEncoded,
      committer: {
        name: `Ammar Mirza`,
        email: "itsammarmirza@gmail.com",
      },
      sha,
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
