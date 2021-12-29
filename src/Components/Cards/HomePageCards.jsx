import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

import { Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    '&:hover': {
      boxShadow: '-1px 10px 29px 0px rgba(0,0,0,0.8)',
    },
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function HomePageCards() {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={7}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <Divider />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Price: $99 K
        </Typography>
        <br />
        <Typography variant="body2" color="textSecondary" component="p">
          Market Capital: $139 B
        </Typography>
        <br />
        <Typography variant="body2" color="textSecondary" component="p">
          Daily Change: -3.5%
        </Typography>
      </CardContent>
    </Card>
  );
}
