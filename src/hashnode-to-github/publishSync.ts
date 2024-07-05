import { checkIfFileExists } from "./checkIfFileExists"
import { createFile } from "./createFile"
import { getPostData } from "./getPostData"
import { getPostSlug } from "./getPostSlug"

export const publishSync = async ({
    publicationId, 
    postId
}: {
    publicationId: string,
    postId: string
}) : Promise<void> => {
    const postSlug = await getPostSlug(postId)
    const postData = await getPostData({publicationId, postSlug})
    const isExistingFile = await checkIfFileExists(postData)
    if(isExistingFile) return 
    createFile({postData})
}