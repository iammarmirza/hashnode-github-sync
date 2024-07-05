export const createSlug = (file: string) : string => {
    const slug = file.toLowerCase().replace('.md', '')
    return slug
}