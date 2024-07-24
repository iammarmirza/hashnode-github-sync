type ExtractedInfo = {
    postId: string
    slug: string | undefined
}

export const extractInfoFromFilename = (fileName: string): ExtractedInfo => {
    const postId = fileName.split('-')[0]
    const slug = fileName.split('-').slice(1).join('-')

    return {postId, slug}
}