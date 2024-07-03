import { Tag } from "."

  
  export interface PublicationData {
    publication: Publication
  }
  
  export interface Publication {
    id: string
    post: Post
  }
  
  export interface Post {
    id: string
    slug: string
    title: string
    subtitle: any
    content: Content
    publishedAt: string
    url: string
    preferences: Preferences
    series?: {
        id: string
    }
    coverImage?: {
        url?: string
        attribution?: string
        photographer?: string
        isAttributionHidden?: boolean
    }
    features: Features
    tags: Tag[]
    seo: Seo
    ogMetaData: OgMetaData
    coAuthors: string[]
  }
  
  export interface Content {
    markdown: string
  }
  
  export interface Preferences {
    disableComments?: boolean
    isDelisted?: boolean
    stickCoverToBottom?: boolean
  }
  
  export interface Features {
    tableOfContents: TableOfContents
  }
  
  export interface TableOfContents {
    isEnabled: boolean
  }
  
  export interface Seo {
    title?: string
    description?: string
  }
  
  export interface OgMetaData {
    image?: string
  }
  