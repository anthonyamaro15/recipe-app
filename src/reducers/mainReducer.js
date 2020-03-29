const initialValue = {
  data: [],
  recipe: ""
};

export const mainReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "ADD_DATA":
      console.log("from paylod", action.payload);
      return {
        ...state,
        data: [...state.data, action.payload]
      };
    default:
      return state;
  }
};
