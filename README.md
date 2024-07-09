# Hashnode Github Sync

Elevate your Hashnode blogging experience with Hashnode Github Sync! \
This GitHub Action establishes seamless two-way synchronization between your Github repo and Hashnode blog. \
2 way means your repo will be updated when you publish from Hashnode and your Blog will be updated when you publish create a markdown file on Github. Your Github repo and blog will always be in sync no matter how you publish/update/delete any article.

## Usage

Place all your blogs in the root folder of the repo and don't nest it inside folders as it might throw an error.\
Any file you create with .md extension will be counted as a blog to publish on Hashnode. \
The file name will be the source of truth and will be counted as slug of your blog so remember to name your file carefully. 


``` yaml
---
# Required! - title of your blog
title: string

# Optional? - subtitle of your blog
subtitle: string

# Optional? - Is hidden from Hashnode feed?
delisted: boolean

# Optional? - Cover Image URL
coverImageUrl: string

# Optional? - Publish date
publishedAt: string

# Optional? - Is Cover Image Attribution hidden
isCoverAttributionHidden: boolean

# Optional? - Cover Image Attribution
coverImageAttribution: string

# Optional? - Cover Image Photographer
coverImagePhotographer: string

# Optional? - Stick Cover to bottom
stickCoverToBottom: boolean

# Optional? - Original Article URL
originalArticleURL: string

# Optional? - Disable Comments
disableComments: boolean

# Optional? - Meta tag title
ogTitle: string

# Optional? - Meta tag description
ogDescription: string

# Optional? - Meta tag Image
ogImage: string

# Optional? - Tag list
tags: {
    id: string,
    name: string,
    slug: string
}[] # Refer to Hashnode's API Docs for more...

# Optional? - Publish As
publishAs: string

# Optional? - Series ID 
seriesId: string

# Optional? - Enable Table of Content
enableTableOfContent: boolean

# Optional? - Is Newsletter Activated
isNewsletterActivated: boolean

# Optional? - Is Scheduled
scheduled: boolean

# Optional? - Is Slug Overridden
slugOverridden: boolean

# Optional? - CoAuthors
coAuthors: string[]
---

# Blog Title

Blog Paragraph.........
```
Create a directory named github/workflows in your repository and include a file named publish.yml. Within the publish.yml file, insert the following commands. These commands are designed to facilitate the publication of your blog post on Hashnode.

``` yml
name: "Publish"

on:
  push:
  repository_dispatch:
      types: [trigger] # This is for the two way sync from Hashnode, to use this you will have to set up a serverless function as a middleware.

jobs:
  print_file_job:
    runs-on: ubuntu-latest
    name: Hashnode Github Sync
    permissions:
      contents: write # Make sure to provide this write permission if you are using two way sync, not required if you're using only one way sync i.e : Github to Hashnode

    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0


    # This action is necessary as it is giving the details about your files in repo
      - name: Get changed files
        id: changed-files
        uses: tj-actions/changed-files@v44

      - name: Hashnode Github Sync
        uses: iammarmirza/hashnode-github-sync@v1.2
        env: 
          GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}} 
          # This is your default github token
        with:
        # All of these fields are required except hashnode_event
          hashnode_host: "ammarmirza.hashnode.dev" # Your hashnode host name
          hashnode_token: ${{ secrets.HASHNODE_TOKEN }} # Your hashnode secret key
          added_files: ${{steps.changed-files.outputs.added_files}}
          modified_files: ${{steps.changed-files.outputs.modified_files}}
          deleted_files: ${{steps.changed-files.outputs.deleted_files}}
          hashnode_event: ${{toJson(github.event.client_payload)}} 
          # Hashnode_event is required in the case of two way sync
```

## Two way sync

Refer to this repo to setup your own middleware for two way sync. \
[Hashnode to Github Webhook](https://github.com/iammarmirza/github-hashnode-webhook.git)