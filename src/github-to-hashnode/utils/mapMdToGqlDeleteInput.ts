type MapMdToGqlDeleteInput = {
    id: string
}

export const mapMdToGqlDeleteInput = (postId: string) : MapMdToGqlDeleteInput => {
    const input = {
        id : postId
    }
    return input
}