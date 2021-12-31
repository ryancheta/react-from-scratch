import React from "react";
import { classes } from "utils";
import { flex, centerItems } from "assets/scss/_flex.mod.scss";
import Goal from "./Goal";
import { useSelector } from "react-redux";

const Goals = (props) => {
  const { goals } = useSelector((state) => state.insights.insights);

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
        {goals?.map(({ title, count, percent }) => (
          <Goal
            key={percent + title}
            title={title}
            count={count}
            percent={percent}
          />
        ))}
        <h4>+ Add Goals</h4>
      </div>
    </div>
  );
};

export default Goals;
