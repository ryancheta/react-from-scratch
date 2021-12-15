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

// const groups = ["underrepresented women", "underrepresented men", 'white women', 'white men']
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
    // colors={({id, data}) => {
    //   console.log(data[`${id}Color`])
    //   data[`${id}Color`]
    // }}
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
        // colors={{ scheme: 'nivo' }}
        // defs={[
        //     {
        //         id: 'dots',
        //         type: 'patternDots',
        //         background: 'inherit',
        //         color: '#38bcb2',
        //         size: 4,
        //         padding: 1,
        //         stagger: true
        //     },
        //     {
        //         id: 'lines',
        //         type: 'patternLines',
        //         background: 'inherit',
        //         color: '#f3f1e6',
        //         rotation: -45,
        //         lineWidth: 6,
        //         spacing: 10
        //     }
        // ]}
        // fill={[
        //     {
        //         match: {
        //             id: 'white men'
        //         },
        //         id: 'dots'
        //     },
        //     {
        //         match: {
        //             id: 'white women'
        //         },
        //         id: 'lines'
        //     }
        // ]}
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
        // legends={[
        //     {
        //         dataFrom: 'keys',
        //         anchor: 'bottom-right',
        //         direction: 'column',
        //         justify: false,
        //         translateX: 120,
        //         translateY: 0,
        //         itemsSpacing: 2,
        //         itemWidth: 100,
        //         itemHeight: 20,
        //         itemDirection: 'left-to-right',
        //         itemOpacity: 0.85,
        //         symbolSize: 20,
        //         effects: [
        //             {
        //                 on: 'hover',
        //                 style: {
        //                     itemOpacity: 1
        //                 }
        //             }
        //         ]
        //     }
        // ]}
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
    // "underrepresented womenColor": "hsl(168, 70%, 50%)",
    "underrepresented womenColor": "red",
    "underrepresented men": 140,
    "underrepresented menColor": "hsl(246, 70%, 50%)",
    "white women": 78,
    "white womenColor": "hsl(147, 70%, 50%)",
    "white men": 127,
    "white menColor": "hsl(239, 70%, 50%)",
  },
  {
    "position": "Manager",
    "underrepresented women": 23,
    "underrepresented womenColor": "hsl(168, 70%, 50%)",
    "underrepresented men": 194,
    "underrepresented menColor": "hsl(232, 70%, 50%)",
    "white women": 150,
    "white womenColor": "hsl(328, 70%, 50%)",
    "white men": 125,
    "white menColor": "hsl(306, 70%, 50%)",
  },
  {
    "position": "Director",
    "underrepresented women": 30,
    "underrepresented womenColor": "hsl(193, 70%, 50%)",
    "underrepresented men": 126,
    "underrepresented menColor": "hsl(28, 70%, 50%)",
    "white women": 26,
    "white womenColor": "hsl(247, 70%, 50%)",
   "white men": 198,
    "white menColor": "hsl(154, 70%, 50%)",
  },
  {
    "position": "VP",
    "underrepresented women": 164,
    "underrepresented womenColor": "hsl(168, 70%, 50%)",
    "underrepresented men": 79,
    "underrepresented menColor": "hsl(55, 70%, 50%)",
    "white women": 12,
    "white womenColor": "hsl(208, 70%, 50%)",
    "white men": 56,
    "white menColor": "hsl(262, 70%, 50%)",
  },
  {
    "position": "Executive/C Suite",
    "underrepresented women": 131,
    "underrepresented womenColor": "hsl(114, 70%, 50%)",
    "underrepresented men": 78,
    "underrepresented menColor": "hsl(53, 70%, 50%)",
    "white women": 28,
    "white womenColor": "hsl(94, 70%, 108%)",
    "white men": 33,
    "white menColor": "hsl(296, 70%, 50%)",
  }
]