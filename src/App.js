import { hot } from "react-hot-loader";
import React, { useState } from "react";
import "./App.scss";
import styles from "./app.mod.scss";

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
    "Portland",
  ];

  let getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  let handleClick = () => {
    let newCity = cities[getRandomInt(10)];
    setMessage(newCity === message ? cities[getRandomInt(10)] : newCity);
  };

  return (
    <div className="App">
      <button onClick={() => handleClick()}>change message</button>
      <h1 id="title" className={styles.cssModuleTest}>
        Hello From {message}
      </h1>
    </div>
  );
}

export default hot(module)(App);
