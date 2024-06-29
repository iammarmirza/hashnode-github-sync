import { POST_SLUG_QUERY } from "../utils/constants"
import { callGraphqlAPI } from "./callGraphqlAPI"

export const getPostSlug = async (id) => {
    const response = await callGraphqlAPI({
        query: POST_SLUG_QUERY,
        variables: {
            id
        },
        token: `${process.env.HASHNODE_TOKEN}`
    })

    return response.data.post.slug
}