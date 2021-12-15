import React from "react";
import Stat from "./Stat";
import { flex, spaceBetween } from "../../assets/scss/_flex.mod.scss";
import { classes } from "../../utils";
import styles from "./styles.mod.scss";

const stats = [
  { id: 1, title: "benchmark", percentage: "18.4", increase: 0 },
  { id: 2, title: "attrition", percentage: "10.6", increase: 0 },
  { id: 3, title: "hires", percentage: "11.7", increase: 1 },
  { id: 4, title: "promotions", percentage: "7.22", increase: 1 },
];

const TrendsAcrossRepresentativeGroups = () => {
  return (
    <>
      <h3 style={{ margin: "1rem 0" }}>Trends Across Representative Groups</h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(calc(50% - 1rem), 1fr))",
          gap: "1rem",
        }}
      >
        <Section />
        <Section />
        <Section />
        <Section />
      </div>
    </>
  );
};

const Section = () => {
  return (
    <div className={styles.container}>
      <div className={styles.statContainer}>
        {stats.map((stat) => (
          <Stat stat={stat} />
        ))}
      </div>
      <div style={{ height: "100px" }}></div>
    </div>
  );
};
export default TrendsAcrossRepresentativeGroups;
