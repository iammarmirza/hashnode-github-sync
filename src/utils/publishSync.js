import { getPostData } from "../api/getPostData"
import fs from 'fs-extra'

export const publishSync = async (publicationId, postSlug) => {
    const data = await getPostData(publicationId, postSlug)
    console.log(data)
    // const fileName = `${postSlug}.md`
    // fs.outputFile(fileName, 'Post Published!', (err) => {
    //     if(err) console.log(err)
    // })
}