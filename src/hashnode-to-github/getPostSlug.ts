import { POST_SLUG_QUERY } from "../shared/constants"
import { callGraphqlAPI } from "../shared/callGraphqlAPI"
import { assertSinglePostIsNotNull } from "src/shared/assertions"

export const getPostSlug = async (postId: string): Promise<string> => {
    const result = await callGraphqlAPI({
        query: POST_SLUG_QUERY,
        variables: {
            id : postId
        }
    })
    assertSinglePostIsNotNull(result)
    return result.data.post.slug
}

