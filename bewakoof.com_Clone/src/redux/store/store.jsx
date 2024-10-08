import { legacy_createStore, combineReducers } from "redux";
import { cartReducer, productReducer, sliderReducer } from "../Reducer/reducer";

// Combine all reducers
const rootReducer = combineReducers({
  data: productReducer,
  cart: cartReducer,
  slider: sliderReducer,
});

// Create Redux Store with DevTools support
const store = legacy_createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
