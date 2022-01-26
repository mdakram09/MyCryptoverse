import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';

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
  cryptoIcon: {
    height: '50px',
    width: '50px',
    borderRadius: '50%',
  },
}));

export default function CryptocurrencyCards(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={7}>
      <CardHeader
        avatar={
          <img className={classes.cryptoIcon} src={props.icon} alt="icon" />
        }
        title={props.name}
        subheader="September 14, 2016"
      />
      <Divider />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Price: ${props.price}
        </Typography>
        <br />
        <Typography variant="body2" color="textSecondary" component="p">
          Market Capital: ${props.marketCap}
        </Typography>
        <br />
        <Typography variant="body2" color="textSecondary" component="p">
          Daily Change: {props.change}%
        </Typography>
      </CardContent>
    </Card>
  );
}
