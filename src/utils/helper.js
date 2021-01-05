export const convertResponseData = (responseData) => {
  return {
    ...responseData.data(),
    id: responseData.id,
  };
};
