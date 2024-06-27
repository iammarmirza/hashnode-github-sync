import { getPostId } from "../api/getPostID"
import { getInputToModifyPost } from "./getInputToModifyPost"
import { makeSlug } from "./makeSlug"
import { parseFile } from "./parseFile"
import { callGraphqlAPI } from "../api/callGraphqlAPI"
import { QUERY } from "./constants"

export const modifyArticle = async (file, hashnode_token, publicationId) => {
    const slug = makeSlug(file)
    const parsedArticle = await parseFile(file)
    const postId = await getPostId(publicationId, slug)
    const input = await getInputToModifyPost(parsedArticle, slug, postId)

    const response = await callGraphqlAPI({
        query: QUERY.modify,
        variables: {
            input
        },
        token: hashnode_token
      })

    return response
}