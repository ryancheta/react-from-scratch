import React from "react";
import { flex } from "../../assets/scss/_flex.mod.scss";
import Goal from "./Goal";

const goals = [
  { id: 1, title: "increase women leaders", number: "22,400", percent: "50%" },
  { id: 2, title: "increase black leaders", number: "16,220", percent: "42%" },
  {
    id: 3,
    title: "increase black employees",
    number: "14,238",
    percent: "40%",
  },
];

const Goals = (props) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <div className={flex} style={{ alignItems: "center" }}>
        <h3 style={{ marginRight: "8px" }}>Commitment Progress</h3>
        <p style={{ color: "#0049C6" }}>
          <small>View All</small>
        </p>
      </div>
      <div className={flex} {...props}>
        {goals.map((goal) => (
          <Goal
            key={goal.id}
            title={goal.title}
            number={goal.number}
            percent={goal.percent}
          />
        ))}
      </div>
    </div>
  );
};

export default Goals;
