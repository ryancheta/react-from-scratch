import React from "react";
import { hot } from "react-hot-loader";
import H1 from "./components/Text/H1";

function App() {
  return (
    <div className="App">
      <h1>Hello React From Scratch!</h1>
    </div>
  );
}

export default hot(module)(App);
