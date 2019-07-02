import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import candidateReducer from "./candidateReducer";
import filterReducer from "./filterReducer";
import blackListReducer from "./blackListReducer";
import matchReducer from "./matchReducer";
import inputReducer from "./inputReducer";

export default combineReducers({
  categoryReducer,
  candidateReducer,
  filterReducer,
  blackListReducer,
  matchReducer,
  inputReducer
});
