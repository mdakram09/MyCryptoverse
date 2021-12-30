import { Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  aboutText: {
    textAlign: 'center',
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <div>
      <Typography className={classes.aboutText} variant="h4">
        About Us
      </Typography>
      <br />
      <Typography>
        Hi, my self Md Akram Khan. I am a Final Year college student pursuing
        BTech in Computer Science and Engineering. I have created this
        MyCryptoverse website for practicing JavaScript, ReactJs, Material-UI,
        APIs, API Fetching, Redux, Redux Saga, Hooks etc. You can get all the
        information about Cryptocurrencies like their prices, exchanges, market
        values, news related to a particular Cryptocurrency, Graphs with the
        data of price of the Cryptocurrency as a chart, percentage change in
        price as a chart and much more.
      </Typography>
    </div>
  );
};

export default About;
