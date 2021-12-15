import React from "react";
import { render } from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "store";

const main = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

const root = document.getElementById("root");
render(main, root);
