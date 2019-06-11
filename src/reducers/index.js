import { combineReducers } from "redux";
import { checkTemplateReducer } from "./checkTemplate";
import { userReducer } from "./user";

export const rootReducer = combineReducers({
  checkTemplate: checkTemplateReducer,
  user: userReducer
});
