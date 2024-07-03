export const makeSlug = (file: string) => {
    const slug = file.replace('.md', '')
    return slug
}