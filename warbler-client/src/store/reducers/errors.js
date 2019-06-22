//a reducer that is going to display errors to the user
import {ADD_ERR0R, REMOVE_ERROR} from "../actionTypes";

export default (state = {message: null}, action) => {
  switch (action.type) {
    case ADD_ERR0R:
      return {...state, message: action.error};
    case REMOVE_ERROR:
      return {...state, message: null};
    default:
      return state;
  }
}