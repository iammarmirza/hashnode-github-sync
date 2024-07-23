type ExtractedInfo = {
    postId: string
    slug: string | undefined
}

export const extractInfoFromFilename = (file: string): ExtractedInfo => {
    const postId = file.split('-')[0]
    const slug = file.split('-').slice(1).join('-')

    return {postId, slug}
}