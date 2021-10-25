import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const main = (
  <Router>
    <App />
  </Router>
);
ReactDOM.render(main, document.getElementById("root"));
