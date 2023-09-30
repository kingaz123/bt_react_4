import { combineReducers, createStore } from "redux";
import { BookingReducer } from "./reducer/dat-ve/reducer";

const rootReducer = combineReducers({
  BookingReducer
})

export const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__())