import React from "react";
import { flex } from "../../../assets/scss/_flex.mod.scss";
import styles from "./styles.mod.scss";

const items = [
  { color: "red", title: "Underrepresented Women" },
  { color: "dodgerblue", title: "Underrepresented Men" },
  { color: "cyan", title: "White Women" },
  { color: "green", title: "White Men" },
];

const Legend = () => {
  return (
    <div className={flex} style={{ justifyContent: "space-around" }}>
      {items.map(({ title, color }, idx) => (
        <Item key={idx} title={title} color={color} />
      ))}
    </div>
  );
};

const Item = ({ color, title }) => (
  <div>
    <p className={styles.legendItem}>
      <small>{title}</small>
    </p>
  </div>
);
export default Legend;
