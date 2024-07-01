import { createFile } from "./createFile"
import { getPostData } from "./getPostData"

export const publishSync = async (publicationId, postSlug) => {
    const data = await getPostData(publicationId, postSlug)
    if(!data.data.publication.post) return
    createFile(await data)
}