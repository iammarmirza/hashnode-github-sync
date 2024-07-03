import { assertErrorIsNotNull, assertPublicationIsNotNull } from "./assertions";
import { callGraphqlAPI } from "./callGraphqlAPI";
import { PUBLICATION_ID_QUERY } from "./constants";
import { getInput } from "./getInput";

export const getPublicationId = async () => {
  const { host } = getInput();
  const result = await callGraphqlAPI({
    query: PUBLICATION_ID_QUERY,
    variables: {
      host,
    },
    token: `${process.env.HASHNODE_TOKEN}`,
  });

  assertErrorIsNotNull(result);
  assertPublicationIsNotNull(result);
  return result.data.publication.id;
};
