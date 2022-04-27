import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "tw-elements";
import store from "./features/store/store.js";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
