import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import MemoryTwoToneIcon from '@mui/icons-material/MemoryTwoTone';
import CircularProgress from '@mui/material/CircularProgress';
import { makeStyles } from '@mui/styles';
import { ICpuInfo } from '../cpumeter/cpumeter';

const listStyles = makeStyles((theme?: any) => ({
  root: {
    backgroundColor: '#f9f9f9',
  },
  listItemText: {
    fontSize: '0.7rem',//Insert your required size
  },
  avatar: {
    color: '#000',
    position: 'relative',
    backgroundColor: 'transparent'
  },
  cpuProgressBar: {
    position: 'absolute',
    zIndex: 10
  },
}));

const getIndividualCore = (cpu: any) => {
  const times: Array<number> = Object.values(cpu.times);
  const total: number = times.reduce((prev: number, cpuTime: number) => prev + cpuTime, 0);
  const { sys, user, idle } = cpu.times;
  return {
    sys: Math.round(sys * 100 / total),
    user: Math.round(user * 100 / total),
    cpuTotal: Math.round((total - idle) * 100 / total)
  };
}

export default function NestedList({ cpus }: ICpuInfo) {
  const classes = listStyles();
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {cpus.map((item: any, index: number) => (
          <ListItem key={index}>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <MemoryTwoToneIcon />
                <CircularProgress
                  className={classes.cpuProgressBar}
                  variant="determinate"
                  value={parseInt(getIndividualCore(item).cpuTotal.toFixed(1))}
                />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary={item.model}
              secondary={
                `sys: ${getIndividualCore(item).sys}%\nuser: ${getIndividualCore(item).user}%`
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}