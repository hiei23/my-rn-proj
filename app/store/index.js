import {createStore} from "redux";
import reducer from "../reducer/index";

export var configureStore = (initialState={}) => {
  return createStore(reducer, initialState);
}
