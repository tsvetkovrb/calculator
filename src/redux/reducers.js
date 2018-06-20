import { combineReducers } from "redux";

import calculator from "./ducks/calculator/reducer";
import background from "./ducks/background/reducer";

export default combineReducers({
  calculator,
  background
});
