import { combineReducers } from "redux";
import productReducer from "./productReducer";
import reducer from "./reducer";

export default combineReducers({ productReducer, reducer });
