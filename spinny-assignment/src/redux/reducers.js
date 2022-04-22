export const amineListReducer = (state = [], action) => {
  switch (action.type) {
    case "UPDATE":
      return [...state, action.payload];
    case "NEW_LIST":
      return [];
    default:
      return state;
  }
};
