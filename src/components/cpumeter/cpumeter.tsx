import * as React from 'react';
import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import RadialChart from '@/charts/radial/radial';
import NestedList from '@/components/listings/nestedlist';
import { CpuInfo } from 'os';

export interface ICpuInfo {
  platform: "" | string,
  cpus: [] | CpuInfo[]
}

export default function CPUMeter() {
  const [frequency, setFrequency] = useState(0);
  const [data, setData] = useState({ y: 0 });
  const [cpuInfo, setCpuInfo] = useState<ICpuInfo>({ cpus: [], platform: "" });

  async function cpuUsage() {
    const response = await fetch('http://localhost:3000/api/cpu');
    const payload = await response.json();
    return payload;
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      cpuUsage().then(res => {
        setData({ ...data, ...res });
        setCpuInfo(res.info);
        setFrequency(2000);
      });
    }, frequency);
    return () => clearInterval(intervalId); //This is important
  }, [data, setData]);


  const styles = {
    cardMedia: {
      width: 200,
      height: 120
    }
  }

  return (
    <Card sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            CPU
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            OS/Platform Version: {cpuInfo.platform}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <NestedList cpus={cpuInfo.cpus} platform={''}></NestedList>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardMedia sx={{ ...styles.cardMedia }}>
          <RadialChart payload={data} />
        </CardMedia>
      </Box>
    </Card>
  )
}
