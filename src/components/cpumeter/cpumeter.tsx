import * as React from 'react';
import { useEffect, useState } from 'react';
import RadialChart from '@/charts/radial/radial';

type Data = [] | [{ id: string, data: Array<Object> }];

const CPUMeter = () => {
  const [data, setData] = useState<Data>([]);

  function getCPUUsage() {
    // let cpuData = os.cpus().map(cpu => ({ x: cpu.model, y: cpu.times.sys * 1000 }));
    // // Accumulate every CPU times values
    // const total = Object.values(cpu.times).reduce(
    //   (acc, tv) => acc + tv, 0
    // );

    // const usage = process.cpuUsage();
    // const currentCPUUsage = (usage.user + usage.system) * 1000;

    // // Find out the percentage used for this specific CPU
    // const percentage = currentCPUUsage / total;
    // console.log(`CPU Usage (%): ${percentage}`);
    // return { x: cpu.model, y: percentage };
    //});
    // return cpuData;
    console.log("it is running...");
  }

  useEffect(() => {
    // setData(getCPUUsage());
    getCPUUsage();
    setData(
      [
        {
          "id": "",
          "data": [
            {
              "x": "Vegetables",
              "y": 0.2
            },
            {
              "x": "Fruits",
              "y": 0.4
            },
            {
              "x": "Meat",
              "y": 0.2
            },
            {
              "x": "Fish",
              "y": 0.2
            }
          ]
        }
      ]
    )
  }, []);

  return (
    <RadialChart data={data} />
  )
}

export default CPUMeter;