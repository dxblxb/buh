import { createStore, combineReducers, applyMiddleware } from "redux";
import { catFilterReducer } from "./catFilterReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { openFrameReducer } from "./openFrameReducer";
const rootReducer = combineReducers({
  catFilter: catFilterReducer,
  openFrame: openFrameReducer
});
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
