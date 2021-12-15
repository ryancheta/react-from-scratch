// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/pie
import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { barColors } from "../RepresentativeGroups/CustomBarChart";
import { barColorsObject } from "../RepresentativeGroups/CustomBarChart";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const getColors = (bar) => barColorsObject[bar.id];
const DonutChart = ({ data /* see data tab */ }) => (
  <ResponsivePie
    data={data}
    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
    innerRadius={0.5}
    padAngle={0.7}
    cornerRadius={3}
    activeOuterRadiusOffset={8}
    borderWidth={1}
    borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
    arcLinkLabelsSkipAngle={10}
    arcLinkLabelsTextColor="#333333"
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ from: "color" }}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
    // defs={[
    //   {
    //     id: "dots",
    //     type: "patternDots",
    //     background: "inherit",
    //     color: "rgba(255, 255, 255, 0.3)",
    //     size: 4,
    //     padding: 1,
    //     stagger: true,
    //   },
    //   {
    //     id: "lines",
    //     type: "patternLines",
    //     background: "inherit",
    //     color: "rgba(255, 255, 255, 0.3)",
    //     rotation: -45,
    //     lineWidth: 6,
    //     spacing: 10,
    //   },
    // ]}
    // fill={[
    //   {
    //     match: {
    //       id: "ruby",
    //     },
    //     id: "dots",
    //   },
    //   {
    //     match: {
    //       id: "c",
    //     },
    //     id: "dots",
    //   },
    //   {
    //     match: {
    //       id: "go",
    //     },
    //     id: "dots",
    //   },
    //   {
    //     match: {
    //       id: "python",
    //     },
    //     id: "dots",
    //   },
    //   {
    //     match: {
    //       id: "scala",
    //     },
    //     id: "lines",
    //   },
    //   {
    //     match: {
    //       id: "lisp",
    //     },
    //     id: "lines",
    //   },
    //   {
    //     match: {
    //       id: "elixir",
    //     },
    //     id: "lines",
    //   },
    //   {
    //     match: {
    //       id: "javascript",
    //     },
    //     id: "lines",
    //   },
    // ]}
    legends={[
      {
        anchor: "bottom",
        direction: "row",
        justify: false,
        translateX: 0,
        translateY: 56,
        itemsSpacing: 0,
        itemWidth: 100,
        itemHeight: 18,
        itemTextColor: "#999",
        itemDirection: "left-to-right",
        itemOpacity: 1,
        symbolSize: 18,
        symbolShape: "circle",
        effects: [
          {
            on: "hover",
            style: {
              itemTextColor: "#000",
            },
          },
        ],
      },
    ]}
  />
);

export default DonutChart;

export const data = [
  {
    id: "entry_level",
    label: "Entry Level",
    value: 41,
    color: "hsl(293, 70%, 50%)",
  },
  {
    id: "erlang",
    label: "erlang",
    value: 174,
    color: "hsl(240, 70%, 50%)",
    // color: barColors.underrepresented_women,
  },
  {
    id: "make",
    label: "make",
    value: 451,
    color: "hsl(201, 70%, 50%)",
  },
  {
    id: "java",
    label: "java",
    value: 113,
    color: "hsl(167, 70%, 50%)",
  },
  {
    id: "php",
    label: "php",
    value: 486,
    color: "hsl(212, 70%, 50%)",
  },
];
