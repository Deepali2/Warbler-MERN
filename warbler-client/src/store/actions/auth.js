import { apiCall } from "../../services/api";
import { SET_CURRENT_USER } from "../actionTypes";

export function setCurrentUser(user) {
  // set CurrentUser is an action Creator
  return {
    type: SET_CURRENT_USER,
    user
  };
}

export function authUser(type, userData) {
  // type will be sign up or sign in
  return dispatch => {
    // we will use redux thunk for this dispatch
    return new Promise((resolve, reject) => {
      return apiCall("post", `/api/auth/${type}`, userData).then(
        ({ token, ...user }) => {
          localStorage.setItem("jwtToken", token);
          dispatch(setCurrentUser(user));
          resolve();
        }
      );
    });
  };
}
