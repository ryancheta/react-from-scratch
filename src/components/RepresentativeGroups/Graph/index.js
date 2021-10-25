import React from "react";
import Legend from "./Legend";
import { data } from "../CustomBarChart";
import CustomBarChart from "../CustomBarChart";

const Graph = () => {
  return (
    <div
      style={{
        border: "1px solid #F2F5F8",
        borderRadius: "12px",
        padding: "1rem",
        height: "500px",
      }}
    >
      <Legend />
      <CustomBarChart data={data} />
    </div>
  );
};

export default Graph;
