import { createFile } from "fs-extra"
import { getPostData } from "../api/getPostData"

export const publishSync = async (publicationId, postSlug) => {
    const data = await getPostData(publicationId, postSlug)
    console.log(data)
    createFile()
}