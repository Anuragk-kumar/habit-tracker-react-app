import { combineReducers } from "redux";
import { habitsReducer } from "./habitReducer";

/* The code is creating a root reducer using the `combineReducers` function from the Redux library. The
`combineReducers` function is used to combine multiple reducers into a single reducer function. In
this case, it is combining the `habitsReducer` into the root reducer. */
const rootReducer = combineReducers({
  habitsReducer
});

export default rootReducer;
