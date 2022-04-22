import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { combineReducers, legacy_createStore as createStore } from "redux";
import {
  amineListReducer,
  currentSearchAPIReducer,
  incrementPageReducer,
} from "./redux/reducers.js";
import { Provider } from "react-redux";

let rootReducer = combineReducers({
  animeListReducer: amineListReducer,
  currentSearchReducer: currentSearchAPIReducer,
  currPage: incrementPageReducer,
});

let store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
