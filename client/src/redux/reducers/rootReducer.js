import { combineReducers } from "redux";
import { gameBoardReducer } from "./gameBoardReducer";
import { userReducer } from './userReducer'

export const rootReducer = combineReducers({
  userState: userReducer,
  topics: gameBoardReducer,

})
