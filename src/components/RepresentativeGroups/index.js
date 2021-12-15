import React from "react";
import Header from "./Header";
import Graph from "./Graph";
import { flex } from "assets/scss/_flex.mod.scss";
import GenderPerformance from "../GenderPerformance";

const RepresentativeGroups = () => {
  return (
    <div className={flex} style={{ marginTop: "4rem" }}>
      <div style={{ flexBasis: "60%", marginRight: "2rem" }}>
        <Header title={`Representative Groups`} />
        <Graph />
      </div>
      <GenderPerformance />
    </div>
  );
};

export default RepresentativeGroups;
