
import { combineReducers } from "redux";
import colorReducer from "./colorReducer";

export const reducers = combineReducers({
    color: colorReducer
})