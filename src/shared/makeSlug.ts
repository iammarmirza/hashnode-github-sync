export const makeSlug = (file: string) : string => {
    const slug = file.replace('.md', '')
    return slug
}