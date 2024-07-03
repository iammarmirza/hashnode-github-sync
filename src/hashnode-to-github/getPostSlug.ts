import { POST_SLUG_QUERY } from "../shared/constants"
import { callGraphqlAPI } from "../shared/callGraphqlAPI"

export const getPostSlug = async (postId: string) => {
    const result = await callGraphqlAPI({
        query: POST_SLUG_QUERY,
        variables: {
            id : postId
        },
        token: `${process.env.HASHNODE_TOKEN}`
    })
    
    return result.data.post.slug
}