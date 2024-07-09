import { checkIfFileExists } from "./checkIfFileExists"
import { createFile } from "./createFile"
import { getPostData } from "./getPostData"
import { getPostSlug } from "./getPostSlug"

export const publishArticle = async ({
    publicationId, 
    postId
}: {
    publicationId: string,
    postId: string
}) : Promise<void> => {
    const slug = await getPostSlug(postId)
    const postData = await getPostData({publicationId, slug})
    const isExistingFile = await checkIfFileExists(postData)
    if(isExistingFile) return 
    createFile({postData})
}