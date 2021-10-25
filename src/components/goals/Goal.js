import React from "react";
// import { flex } from "../../assets/scss/_flex.mod.scss";
import styles from "./styles.mod.scss";

let flex = { display: "flex" };

const Goal = ({ title, number, percent, ...rest }) => {
  return (
    <div
      style={{
        display: "flex",
        alignContent: "center",
        // marginRight: "6rem",
        // borderRight: "1px solid #a4a4a4",
      }}
      {...rest}
    >
      <div style={{ marginRight: "1rem" }}>
        <Title title={title} />
        <Stat number={number} percent={percent} />
      </div>
      <Graph />
    </div>
  );
};

const Title = ({ title }) => (
  <h5
    style={{
      whiteSpace: "nowrap",
      fontWeight: "normal",
      letterSpacing: "0.25px",
      textTransform: "uppercase",
      color: "#50616E",
      marginBottom: "0.75rem",
    }}
  >
    {title}
  </h5>
);
const Stat = ({ number, percent }) => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <h2 style={{ marginRight: "0.5rem" }}>{number}</h2>
    <p style={{ color: "#52B788" }}>{percent}</p>
  </div>
);

const Graph = () => (
  <div className={styles.halfCircle}>
    <h3 style={{ alignSelf: "flex-end" }}>50%</h3>
  </div>
);

export default Goal;
