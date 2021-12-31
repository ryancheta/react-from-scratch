import React from "react";
import { classes } from "../../utils";
import { flex, flex1, spaceBetween } from "../../assets/scss/_flex.mod.scss";
import styles from "./styles.mod.scss";

const Goal = ({ title, count, percent, ...rest }) => {
  return (
    <div
      style={{
        display: "flex",
        alignContent: "center",
        // borderRight: "2px solid #ececec",
        // paddingRight: "1.5rem",
      }}
      {...rest}
    >
      <div className={classes(flex, spaceBetween, flex1)} id="this">
        <div style={{ marginRight: "1rem" }}>
          <Title title={title} />
          <Stat count={count} percent={percent} />
        </div>
        <Graph />
      </div>
    </div>
  );
};

const Title = ({ title }) => (
  <h5
    style={{
      whiteSpace: "nowrap",
      fontWeight: "normal",
      letterSpacing: "1px",
      textTransform: "uppercase",
      color: "#50616E",
      marginBottom: "0.75rem",
    }}
  >
    <small>{title}</small>
  </h5>
);

const Stat = ({ count, percent }) => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <h2 style={{ marginRight: "0.5rem" }}>
      {Intl.NumberFormat().format(count + 1000)}
    </h2>
    <p style={{ color: "#52B788" }}>{percent}%</p>
  </div>
);

const Graph = () => (
  <div className={styles.halfCircle}>
    <h3 style={{ alignSelf: "flex-end" }}>50%</h3>
  </div>
);

export default Goal;
