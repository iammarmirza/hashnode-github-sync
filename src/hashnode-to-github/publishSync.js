import { createFile } from "./createFile"
import { getPostData } from "./getPostData"

export const publishSync = async (publicationId, postSlug) => {
    const data = await getPostData(publicationId, postSlug)
    console.log('Level 1', data)
    if(!data.publication.post) return
    createFile(data)
}