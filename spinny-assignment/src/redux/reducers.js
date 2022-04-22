export const amineListReducer = (state = [], action) => {
  switch (action.type) {
    case "UPDATE":
      return [...state, action.payload];
    case "NEW_ANIMES":
      return [];
    default:
      return state;
  }
};

export const currentSearchAPIReducer = (state = "", action) => {
  switch (action.type) {
    case "CURRENT_SEARCH":
      return action.payload;

    default:
      return state;
  }
};

export const incrementPageReducer = (state = 1, action) => {
  switch (action.type) {
    case "INCREMENT_PAGE_NO":
      return state + 1;
    case "RESET":
      return 0;
    default:
      return state;
  }
};
