import { createFile } from "./createFile"
import { getPostData } from "./getPostData"

export const publishSync = async (publicationId, postSlug) => {
    const data = await getPostData(publicationId, postSlug)
    const post = await data.publication.post
    if(!post) return
    createFile(post)
}