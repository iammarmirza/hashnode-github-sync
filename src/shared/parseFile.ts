import fs from 'fs-extra'
import { default as matter } from 'gray-matter'
import { ParsedContent } from './types'

export const parseFile = async (fileName: string) : Promise<ParsedContent> => {
    const content = await fs.readFile(fileName, "utf-8")
    const parsedArticle = matter(content, { language: "yaml" }) 
    return parsedArticle as unknown as ParsedContent
}