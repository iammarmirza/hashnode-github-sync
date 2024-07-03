import { createFile } from "./createFile"
import { getPostData } from "./getPostData"

export const publishSync = async ({
    publicationId, 
    postSlug
}: {
    publicationId: string | number,
    postSlug: string | undefined
}) => {
    const data = await getPostData({publicationId, postSlug})
    createFile(data)
}