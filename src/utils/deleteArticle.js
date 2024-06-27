import { makeSlug } from "./makeSlug"
import { getPostId } from "../api/getPostID"
import { getInputToDeletePost } from "./getInputToDeletePost"
import { QUERY } from "./constants"
import { callGraphqlAPI } from "../api/callGraphqlAPI"

export const deleteArticle = async (file, hashnode_token, publicationId) => {
    const slug = makeSlug(file)
    const postId = await getPostId(publicationId, slug)
    const input = await getInputToDeletePost(postId)

    const response = await callGraphqlAPI({
        query: QUERY.delete,
        variables: {
            input
        },
        token: hashnode_token
      })

    console.log(response)
    return response
}