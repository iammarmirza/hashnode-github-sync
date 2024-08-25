export const HASHNODE_ENDPOINT = "https://gql.hashnode.com";

export const QUERY = {
  publish: `mutation PublishPost($input: PublishPostInput!) {
    publishPost(input: $input) {
      post {
    id
      slug
      title
      subtitle
      content {
        markdown
      }
      publishedAt
      url
      preferences {
        disableComments
        isDelisted
        stickCoverToBottom
      }
      series {
        id
      }
      coverImage {
        url
        attribution
        photographer
        isAttributionHidden
      }
      features {
        tableOfContents {
          isEnabled
        }
      }
      tags {
        id
        name
        slug
      }
      seo {
        title
        description
      }
      ogMetaData {
		image
      }
    coAuthors {
      id
    }
  }
    }
  }`,
  modify: `mutation ModifyPost ($input: UpdatePostInput!) {
  updatePost (input: $input) {
    post {
      id
      title
      slug
    }
  }
}`,
  delete: `mutation RemovePost($input: RemovePostInput!) {
  removePost(input: $input) {
    post {
      id
      slug
      title
    }
  }
}`,
  getPostById: `query PostData ($id: ID!) {
  post(id: $id) {
    id
      slug
      title
      subtitle
      content {
        markdown
      }
      publishedAt
      url
      preferences {
        disableComments
        isDelisted
        stickCoverToBottom
      }
      series {
        id
      }
      coverImage {
        url
        attribution
        photographer
        isAttributionHidden
      }
      features {
        tableOfContents {
          isEnabled
        }
      }
      tags {
        id
        name
        slug
      }
      seo {
        title
        description
      }
      ogMetaData {
		image
      }
    coAuthors {
      id
    }
  }
}`,
  getPostId: `query Publication($id: ObjectId, $slug: String!) {
  publication(id: $id) {
    id
    post(slug: $slug) {
      id
    }
  }
}`,
  getPublicationId: `query findPublication ($host: String!) {
  publication(host: $host) {
    id
  }
}`,
};
