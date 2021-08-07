import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  iconClass: {
      marginRight: 30,
      marginTop: 4
  }
}));

export default function AlignItemsList({data}) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {data.map((item, i) => {
          return (
              <div key={item.id}>
              <ListItem alignItems="flex-start">
                    <FiberManualRecordIcon className={classes.iconClass} />
                    <ListItemText primary={item.title}
                    />
                </ListItem>
                {i < data.length -1 && <Divider variant="inset" />}
              </div>
          )
      })}
    </List>
  );
}
