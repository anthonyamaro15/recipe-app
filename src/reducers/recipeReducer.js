const initialValue = {
  api: {
    ID: "6967c87a",
    KEY: "d4dcd55826cec22b6a58e17472fcd230"
  },
  recipe: "",
  loading: false,
  data: [],
  error: ""
};

export const recipeReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "GET_INPUT_VALUE":
      return {
        ...state,
        recipe: action.payload.recipe
      };
    case "FETCHING_DATA":
      return {
        ...state,
        loading: true
      };
    case "RESPONSE_DATA":
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case "ERROR":
      return {
        ...state,
        data: [],
        error: action.payload
      };
    default:
      return state;
  }
};
