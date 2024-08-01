import { mapGqlToMarkdownInput } from './mapGqlToMarkdownInput';
import { octokit } from './octokit';
import { default as matter } from 'gray-matter'
import { Base64 } from "js-base64";
import { context } from "@actions/github";
import { PostData } from 'src/shared/types';
import { getCommitterDetails } from './getCommitterDetails';

export const createFile = async ({postData, sha}: {
  postData: PostData,
  sha?: string
}) => {
  try {
    const commitType = sha ? "Modified" : "Added"
    const userDetails = await getCommitterDetails()
    const post = postData.post
    const fileName = `${post.id}-${post.slug}.md`
    const frontMatter = mapGqlToMarkdownInput(postData)
    const fileContent = matter.stringify(post.content.markdown, frontMatter)
    const contentEncoded = Base64.encode(fileContent)
    const { data } = await octokit.repos.createOrUpdateFileContents({
      owner: context.repo.owner,
      repo: context.repo.repo,
      path: fileName,
      branch: "main",
      message: `${commitType} Blog ${fileName} programatically`,
      content: contentEncoded,
      committer: {
        name: `${userDetails.name}`,
        email: `${userDetails.email}`,
      },
      sha,
      author: {
        name: `${userDetails.name}`,
        email: `${userDetails.email}`,
      },
    });
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};
