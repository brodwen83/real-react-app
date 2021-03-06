import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../actiontypes/auth";

const initialState = {};

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case USER_LOGGED_IN:
      return action.user;
    case USER_LOGGED_OUT:
      return {};
    default:
      return state;
  }
}
