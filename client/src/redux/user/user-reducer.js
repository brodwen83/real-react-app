import { USER_LOGGED_IN } from "./user-action-types";

const initialState = {};

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case USER_LOGGED_IN:
      return action.user;
    default:
      return state;
  }
}
