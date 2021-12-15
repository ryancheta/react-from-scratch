import React from "react";
import Header from "../RepresentativeGroups/Header";
import DonutChart from "./Donut";
import styles from "./styles.mod.scss";
import { data } from "./Donut";

const GenderPerformance = () => {
  return (
    <div style={{ width: "40%" }}>
      <div style={{ display: "flex", alignItems: "center", self }}>
        <Header title={`Gender Performance`} noDropdowns />
      </div>
      <div className={styles.container}>
        <header className={styles.subtitle}>Gender</header>
        <div style={{ height: "446px" }}>
          <DonutChart data={data} />
        </div>
      </div>
    </div>
  );
};

export default GenderPerformance;
