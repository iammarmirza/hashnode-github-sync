import {
  assertPublicationIsNotNull,
  callGraphqlAPI,
  QUERY,
  getInput,
} from "src/shared";

export const getPublicationId = async (): Promise<string> => {
  const { host } = getInput();
  const result = await callGraphqlAPI({
    query: QUERY.getPublicationId,
    variables: {
      host,
    },
  });

  assertPublicationIsNotNull(result);
  return result.data.publication.id;
};
