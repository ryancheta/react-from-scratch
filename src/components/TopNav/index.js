import React from "react";

function TopNav(props) {
  return (
    <div {...props} style={{ display: "flex", marginBottom: "2rem" }}>
      <div style={{ marginRight: "auto" }}>
        <h2>Diversity + Inclusion Insights</h2>
        <p style={{ color: "#8D9DA8" }}>
          <small>Monday, 09-09-2021</small>
        </p>
      </div>

      <Select options={["Date Range"]} />
      <Select options={["Monthly", "Weekly", "Quarterly"]} />
      <input
        placeholder="Search for anything..."
        style={{
          width: "200px",
          paddingLeft: "10px",
          margin: "0.5rem",
          background: "#FAFAFB",
          outline: "none",
          border: "1px solid #F2F5F8",
          borderRadius: "6px",
        }}
      />
    </div>
  );
}

export const Select = ({ options }) => (
  <select
    style={{
      color: "#50616E",
      margin: "0.5rem",
      padding: "0.5rem",
      borderRadius: "6px",
      border: "1px solid #F2F5F8",
    }}
  >
    {options?.map((option, idx) => (
      <option key={idx} defaultValue={`Obie Wan`}>
        {option}
      </option>
    ))}
  </select>
);

export default TopNav;
