import { assertPostIsNotNull, assertPublicationIsNotNull } from "./assertions";
import { callGraphqlAPI } from "./callGraphqlAPI";
import { POST_ID_QUERY } from "./constants";

export const getPostId = async ({
  publicationId,
  slug,
}: {
  publicationId: string | number;
  slug: string;
}) => {
  
  const result = await callGraphqlAPI({
    query: POST_ID_QUERY,
    variables: {
      id: publicationId,
      slug,
    },
    token: `${process.env.HASHNODE_TOKEN}`
  })

  assertPublicationIsNotNull(result)
  assertPostIsNotNull(result)

  return result.data.publication.post.id;
};