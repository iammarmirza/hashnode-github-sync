import { PublicationData } from "src/shared/types/Publication";
import { octokit } from "./octokit";
import { context } from "@actions/github";

type DeleteFileType = {
    postData: PublicationData,
    sha: string
}

export const deleteFile = async ({postData, sha}: DeleteFileType) => {
    try {
        await octokit.rest.repos.deleteFile({
            owner: context.repo.owner,
            repo: context.repo.repo,
            path: `${postData.publication.post.slug}.md`,
            message: `File deleted for recreation.`,
            sha
        })
    } catch(error: any) {
        console.log(error.message)
    }
}