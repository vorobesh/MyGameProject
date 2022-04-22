import { combineReducers } from "redux";
import { topicsReducer } from "./topicsReducer";
import { userReducer } from './userReducer';
import { questionsReducer } from './questionsReducer';

export const rootReducer = combineReducers({
  userState: userReducer,
  topics: topicsReducer,
  questions: questionsReducer,

})
