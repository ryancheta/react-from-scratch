import { hot } from "react-hot-loader";
import React, { useState } from "react";
import "./App.scss";

function App() {
  const [message, setMessage] = useState("San Jose");
  const cities = [
    "San Jose",
    "Los Angeles",
    "San Diego",
    "San Francisco",
    "Seattle",
    "New York",
    "Miami",
    "Austin",
    "Dallas",
    "Portland"
  ];

  let getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  let handleClick = () => {
    setMessage(cities[getRandomInt(10)]);
    console.log("WHAT THE FUCK?!?!");
  };

  return (
    <div className="App">
      <button onClick={() => handleClick()}>change message</button>
      <h1 id="title">Hello React From {message}</h1>
    </div>
  );
}

export default hot(module)(App);
