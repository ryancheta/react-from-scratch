import React from "react";
import { flex } from "../../../assets/scss/_flex.mod.scss";
import styles from "./styles.mod.scss";
import { barColors } from "../CustomBarChart";

const items = [
  { color: barColors.underrepresented_women, title: "Underrepresented Women" },
  { color: barColors.underrepresented_men, title: "Underrepresented Men" },
  { color: barColors.white_women, title: "White Women" },
  { color: barColors.white_men, title: "White Men" },
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
  <p className={styles.legendItem} style={{ "--dotColor": color }}>
    <small>{title}</small>
  </p>
);

export default Legend;
