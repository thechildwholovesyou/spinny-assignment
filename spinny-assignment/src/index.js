import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { combineReducers, legacy_createStore as createStore } from "redux";
import { animeListReducer } from "./redux/reducers";
import { Provider } from "react-redux";
let combinedReducers = combineReducers({
  animes: animeListReducer,
});

let store = createStore(combineReducers);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <App />
  </div>
);
