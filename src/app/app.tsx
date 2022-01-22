import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CPUMeter from '@/components/cpumeter/cpumeter';

import './app.scss';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const App = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item sx={{ flex: '1 0 auto' }}>
          <Item elevation={0}><CPUMeter /></Item>
        </Grid>
        <Grid item sx={{ flex: '1 0 auto' }}>
          <Item elevation={0}><CPUMeter /></Item>
        </Grid>
        <Grid item sx={{ flex: '1 0 auto' }}>
          <Item elevation={0}><CPUMeter /></Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
