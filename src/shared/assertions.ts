import { HASHNODE_ENDPOINT, POST_DATA_QUERY } from "./constants"

export const assertPublicationIsNotNull = (result: any) => {
  if (!result.data.publication)
    throw new Error("Publication not found, please check your publication id.");
};

export const assertPostIsNotNull = (result: any) => {
  if (!result.data.publication.post) throw new Error("Post not found");
};

export const assertErrorIsNotNull = (result: any) => {
  if (result.errors) throw new Error(`${result.errors[0].message}`);
};

export const assertSinglePostIsNotNull = (result: any) => {
  if (!result.data.post) throw new Error(`Post not found`);
};

export const assertIfPostExists = async ({slug, publicationId}: {
    slug: string
    publicationId: string
}) => {
    const response = await fetch(HASHNODE_ENDPOINT, {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
            Authorization: `${process.env.HASHNODE_TOKEN}`
        },
        body: JSON.stringify({
            query: POST_DATA_QUERY,
            variables: {
                id: publicationId,
                slug
            }
        })
    })

    const result = await response.json()
    if(result.data.publication.post) throw new Error(`Post with the given slug already exists on Hashnode, please create a new file with a different slug.`)
}