// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/bar
import React from 'react'
import { ResponsiveBar } from '@nivo/bar'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const barColors = {
  underrepresented_women: '#3F8CFF',
  underrepresented_men: '#9284EE',
  white_women: '#5390D9',
  white_men: '#89DFE4',
}

const groups = Object.keys(barColors).map(key => key.split("_").join(" "))

export const barColorsObject = {
  [groups[0]]: barColors.underrepresented_women,
  [groups[1]]: barColors.underrepresented_men,
  [groups[2]]: barColors.white_women,
  [groups[3]]: barColors.white_men,
}

const getColors = bar => (barColorsObject[bar.id])
const CustomBarChart = ({ data /* see data tab */ }) => (
    <ResponsiveBar
    colors={getColors}
    enableLabel={false}
    enableGridY={false}
        data={data}
        keys={groups}
        indexBy="position"
        margin={{ top: 50, right: 0, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Positions',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Quantity',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        role="application"
        ariaLabel="Representative Groups"
        barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in positions: "+e.indexValue}}
    />
)

export {barColors}
export default CustomBarChart;

export const data = [
  {
    "position": "Entry Level",
    "underrepresented women": 200,
    "underrepresented men": 140,
    "white women": 78,
    "white men": 127,
  },
  {
    "position": "Manager",
    "underrepresented women": 23,
    "underrepresented men": 194,
    "white women": 150,
    "white men": 125,
  },
  {
    "position": "Director",
    "underrepresented women": 30,
    "underrepresented men": 126,
    "white women": 26,
    "white men": 198,
  },
  {
    "position": "VP",
    "underrepresented women": 164,
    "underrepresented men": 79,
    "white women": 12,
    "white men": 56,
  },
  {
    "position": "Executive/C Suite",
    "underrepresented women": 131,
    "underrepresented men": 78,
    "white women": 28,
    "white men": 33,
  }
]