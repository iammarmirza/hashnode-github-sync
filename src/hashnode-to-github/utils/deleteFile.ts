import { PostData } from "src/shared/types"
import { octokit } from "./octokit";
import { context } from "@actions/github";

type DeleteFileType = {
    postData: PostData,
    sha: string
}

export const deleteFile = async ({postData, sha}: DeleteFileType) => {
    try {
        await octokit.rest.repos.deleteFile({
            owner: context.repo.owner,
            repo: context.repo.repo,
            path: `${postData.post.slug}.md`,
            message: `File deleted for recreation.`,
            sha
        })
    } catch(error: any) {
        console.log(error.message)
    }
}