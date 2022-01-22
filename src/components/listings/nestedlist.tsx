import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import { makeStyles } from '@mui/styles';
import { ICpuInfo } from '../cpumeter/cpumeter';

const listStyles = makeStyles((theme?: any) => ({
  root: {
    backgroundColor: '#f9f9f9',
  },
  listItemText: {
    fontSize: '0.7rem',//Insert your required size
  }
}));

export default function NestedList({ cpulist }: ICpuInfo) {
  const classes = listStyles();
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {cpulist.map((item: any, index: number) => (
          <ListItem key={index}>
            <ListItemAvatar>
              <Avatar>
                <DeveloperBoardIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary={item.model}
              secondary="Jan 9, 2014"
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}