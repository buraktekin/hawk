import * as React from 'react';
import { ResponsiveRadialBar } from '@nivo/radial-bar';

type RadialProps = {
  payload: any
}

const setCPUData = (payload: any) => {
  const data = [
    {
      id: "",
      data: [
        {
          x: payload.x,
          y: payload.y
        }
      ]
    }
  ];
  return data;
}

const styles = {
  root: {
    fontFamily: "Baumans",
    textAlign: "center",
    position: "relative",
    width: "100%",
    height: "100%"
  } as React.CSSProperties,
  overlay: {
    width: "100%",
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 30,
    color: "#000000",
    textAlign: "center",
    pointerEvents: "none"
  } as React.CSSProperties,
  totalLabel: {
    fontSize: 24
  } as React.CSSProperties
};

const RadialChart = ({ payload }: RadialProps) => {
  return (
    <div style={styles.root}>
      <ResponsiveRadialBar
        data={setCPUData(payload)}
        valueFormat=">-.2f"
        padding={0.1}
        innerRadius={0.8}
        cornerRadius={40}
        startAngle={0}
        endAngle={Math.floor(360 * (payload.y / 100))}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors={{ scheme: 'red_grey' }}
        radialAxisStart={{ tickSize: 20, tickPadding: 0, tickRotation: 0 }}
        circularAxisOuter={null}
        enableRadialGrid={false}
        enableCircularGrid={false}
        enableLabels={false}
        label="value"
        labelsSkipAngle={0}
        labelsRadiusOffset={2.5}
        labelsTextColor="#8780ff"
        motionConfig="molasses"
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
      <div style={styles.overlay}>
        <span>{payload.y}%</span>
      </div>
    </div>
  )
};

export default RadialChart;