export const createSlug = (fileName: string) : string => {
    const slug = fileName.toLowerCase().replace('.md', '')
    return slug
}