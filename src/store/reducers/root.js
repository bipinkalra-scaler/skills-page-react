import { combineReducers } from "redux";
import skillsReducer from "./skills";

const rootReducer = combineReducers({
  skills: skillsReducer,
})

export default rootReducer;