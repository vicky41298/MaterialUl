import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar alt="A" src="/one.jpg" />
      <Avatar alt="B" src="/one.jpg" />
      <Avatar alt="C" src="/one.jpg" />
      <Avatar alt="D" src="/one.jpg" />
      <Avatar alt="E" src="/one.jpg" />
      <Avatar alt="F" src="/one.jpg" />
      <Avatar alt="G" src="/one.jpg" />
      <Avatar alt="H" src="/one.jpg" />

    </div>
  );
}