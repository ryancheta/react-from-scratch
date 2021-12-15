import React from "react";
import { classes } from "utils";
import { flex, centerItems } from "assets/scss/_flex.mod.scss";
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
      <div className={classes(flex, centerItems)}>
        <h3 style={{ marginRight: "8px" }}>Commitment Progress</h3>
        <button
          style={{
            color: "#0049C6",
            fontSize: "1rem",
            background: "transparent",
            outline: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          <small>View All</small>
        </button>
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
        <h4>+ Add Goals</h4>
      </div>
    </div>
  );
};

export default Goals;
