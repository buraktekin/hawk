import * as React from 'react';
import { ResponsiveRadialBar } from '@nivo/radial-bar';

type RadialProps = {
  data: any
}

export default function RadialChart({ data }: RadialProps) {
  return (
    <ResponsiveRadialBar
      data={data}
      valueFormat=" >(.2%"
      padding={0}
      innerRadius={0.8}
      cornerRadius={2}
      startAngle={0}
      endAngle={360}
      margin={{ top: 40, right: 120, bottom: 40, left: 40 }}
      colors={{ scheme: 'greys' }}
      radialAxisStart={{ tickSize: 20, tickPadding: 0, tickRotation: 0 }}
      circularAxisOuter={{ tickSize: 10, tickPadding: 10, tickRotation: 0 }}
      enableLabels={true}
      legends={
        [
          {
            anchor: 'right',
            direction: 'column',
            justify: false,
            translateX: 150,
            translateY: 0,
            itemsSpacing: 20,
            itemDirection: 'left-to-right',
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: '#999',
            symbolSize: 18,
            symbolShape: 'square',
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: '#000'
                }
              }
            ]
          }
        ]}
    />
  )
};