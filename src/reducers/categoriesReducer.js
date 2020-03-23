import { GET_CATEGORIES } from "../actions/types";

const INITIAL_STATE = {
  list: []
};

const categoriesReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CATEGORIES:
      return {
        ...state,
        list: payload
      };
    default:
      return state;
  }
};

export default categoriesReducer;
