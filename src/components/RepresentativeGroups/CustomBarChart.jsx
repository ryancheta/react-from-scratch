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
const CustomBarChart = ({ data /* see data tab */ }) => (
    <ResponsiveBar
    enableLabel={false}
    enableGridY={false}
        data={data}
        keys={[ 'hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut' ]}
        indexBy="country"
        margin={{ top: 50, right: 0, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        // colors={{ scheme: 'nivo' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'fries'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'sandwich'
                },
                id: 'lines'
            }
        ]}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'country',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'food',
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
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}}
    />
)

export default CustomBarChart;

export const data = [
  {
    "country": "Entry Level",
    "hot dog": 200,
    "hot dogColor": barColors.underrepresented_women,
    "burger": 140,
    "burgerColor": "hsl(246, 70%, 50%)",
    "sandwich": 78,
    "sandwichColor": "hsl(147, 70%, 50%)",
    "kebab": 127,
    "kebabColor": "hsl(239, 70%, 50%)",
    "fries": 189,
    "friesColor": "hsl(279, 70%, 50%)",
    "donut": 36,
    "donutColor": "hsl(251, 70%, 50%)"
  },
  {
    "country": "Manager",
    "hot dog": 23,
    "hot dogColor": barColors.underrepresented_women,
    "burger": 194,
    "burgerColor": "hsl(232, 70%, 50%)",
    "sandwich": 150,
    "sandwichColor": "hsl(328, 70%, 50%)",
    "kebab": 125,
    "kebabColor": "hsl(306, 70%, 50%)",
    "fries": 54,
    "friesColor": "hsl(6, 70%, 50%)",
    "donut": 0,
    "donutColor": "hsl(134, 70%, 50%)"
  },
  {
    "country": "Director",
    "hot dog": 30,
    "hot dogColor": "hsl(193, 70%, 50%)",
    "burger": 126,
    "burgerColor": "hsl(28, 70%, 50%)",
    "sandwich": 26,
    "sandwichColor": "hsl(247, 70%, 50%)",
    "kebab": 198,
    "kebabColor": "hsl(154, 70%, 50%)",
    "fries": 156,
    "friesColor": "hsl(148, 70%, 50%)",
    "donut": 136,
    "donutColor": "hsl(133, 70%, 50%)"
  },
  {
    "country": "VP",
    "hot dog": 164,
    "hot dogColor": "hsl(168, 70%, 50%)",
    "burger": 79,
    "burgerColor": "hsl(55, 70%, 50%)",
    "sandwich": 12,
    "sandwichColor": "hsl(208, 70%, 50%)",
    "kebab": 56,
    "kebabColor": "hsl(262, 70%, 50%)",
    "fries": 71,
    "friesColor": "hsl(269, 70%, 50%)",
    "donut": 71,
    "donutColor": "hsl(348, 70%, 50%)"
  },
  {
    "country": "Executive/C Suite",
    "hot dog": 131,
    "hot dogColor": "hsl(114, 70%, 50%)",
    "burger": 78,
    "burgerColor": "hsl(53, 70%, 50%)",
    "sandwich": 28,
    "sandwichColor": "hsl(94, 70%, 50%)",
    "kebab": 108,
    "kebabColor": "hsl(296, 70%, 50%)",
    "fries": 108,
    "friesColor": "hsl(288, 70%, 50%)",
    "donut": 53,
    "donutColor": "hsl(334, 70%, 50%)"
  }
]