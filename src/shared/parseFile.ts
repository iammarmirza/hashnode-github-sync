import fs from 'fs-extra'
import { default as matter } from 'gray-matter'

export const parseFile = async (fileName: string) => {
    const content = await fs.readFile(fileName, "utf-8")
    const parsedArticle = matter(content, { language: "yaml" }) 
    return parsedArticle
}