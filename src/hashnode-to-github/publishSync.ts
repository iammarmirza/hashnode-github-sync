import { checkIfFileExists } from "./checkIfFileExists"
import { createFile } from "./createFile"
import { getPostData } from "./getPostData"

export const publishSync = async ({
    publicationId, 
    postSlug
}: {
    publicationId: string,
    postSlug: string
}) : Promise<void> => {
    const postData = await getPostData({publicationId, postSlug})
    const isExistingFile = await checkIfFileExists(postData)
    if(isExistingFile) return 
    createFile({postData})
}