export const extractInfoFromFilename = (file: string) => {
    const postId = file.split('-')[0]
    const slug = file.split('-').slice(1).join('-')

    return {postId, slug}
}