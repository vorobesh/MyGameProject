import { combineReducers } from "redux";
import { gameBoardReducer } from "./gameBoardReducer";

export const rootReducer = combineReducers({
  topics: gameBoardReducer
})
