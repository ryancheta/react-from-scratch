import React from "react";
import Header from "../RepresentativeGroups/Header";
import styles from "./styles.mod.scss";

const GenderPerformance = () => {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Header title={`Gender Performance`} noDropdowns />
      </div>
      <div className={styles.container}>
        <header className={styles.subtitle}>Gender</header>
        <div style={{ height: "446px" }}></div>
      </div>
    </div>
  );
};

export default GenderPerformance;
