import { USER_LOGGED_IN } from "./user-action-types";
import api from "../api";

/** login: A function that takes 'credentials'
 *  and returns another function that has api request inside the 'api' object.
 *  api: An abject with api requests
 *  Make an api request along with the credentials and wait for the response data as 'user'
 *  @param credentials - a submitted data from LoginPage
 */
export const login = credentials => dispatch =>
  api.user.login(credentials).then(user => dispatch(userLoggedIn(user)));

/** end login */

/**
 * @param user
 * dispatch 'user' as payload to the reducer
 */
export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user
});
