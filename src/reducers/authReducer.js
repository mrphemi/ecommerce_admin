import { SET_CURRENT_USER } from "../actions/types";

const INITIAL_STATE = {
  isAuthenticated: false,
  user: {}
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: Object.keys(action.payload).length ? true : false,
        user: action.payload
      };
    default:
      return state;
  }
};

export default authReducer;
