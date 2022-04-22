export const updateAnimes = (v) => {
  return {
    type: "UPDATE",
    payload: v,
  };
};

export const currentSearch = (v) => {
  return {
    type: "CURRENT_SEARCH",
    payload: v,
  };
};
