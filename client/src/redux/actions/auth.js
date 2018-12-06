import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../actiontypes/auth";
import api from "../api";

/** login: A function that takes 'credentials'
 *  and returns another function that has api request inside the 'api' object.
 *  api: An abject with api requests
 *  Make an api request along with the credentials and wait for the response data as 'user'
 *  @param credentials - a submitted data from LoginPage
 */
export const login = credentials => dispatch =>
  api.user.login(credentials).then(user => {
    localStorage.bookwormJWT = user.token;
    dispatch(userLoggedIn(user));
  });

/** logout */
export const logout = () => dispatch => {
  localStorage.removeItem("bookwormJWT");
  dispatch(userLoggedOut());
};

/** signup */

/** ACTION CREATORS */
/** @param user
 * returns actions
 * 'user' as payload to the reducer */
export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user
});

/** @description returns action USER_LOGGED_OUT */
export const userLoggedOut = () => ({
  type: USER_LOGGED_OUT
});

/** end action creators */
