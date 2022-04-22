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

export const newAnimes = (v) => {
  return {
    type: "NEW_ANIMES",
    payload: v,
  };
};

export const incrementPageNumberAction = (v) => {
  return {
    type: "INCREMENT_PAGE_NO",
    payload: v,
  };
};
