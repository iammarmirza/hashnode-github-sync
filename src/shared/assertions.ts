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
