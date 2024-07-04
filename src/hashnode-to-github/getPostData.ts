import { POST_DATA_QUERY } from "../shared/constants";
import { callGraphqlAPI } from "../shared/callGraphqlAPI";
import { assertPostIsNotNull, assertPublicationIsNotNull } from "../shared/assertions";
import { PublicationData } from "src/shared/types/Publication";

export const getPostData = async ({ publicationId, postSlug }: {
    publicationId: any,
    postSlug: string
}) : Promise<PublicationData> => {
  const result = await callGraphqlAPI({
    query: POST_DATA_QUERY,
    variables: {
      id: publicationId,
      slug: postSlug,
    },
    token: `${process.env.HASHNODE_TOKEN}`,
  });

  assertPublicationIsNotNull(result)
  assertPostIsNotNull(result)
  return result.data;
};
