import { Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import HomePageCards from './Cards/HomePageCards';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectedGlobalStats } from '../redux/actions/actions';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Homepage = () => {
  const classes = useStyles();

  // API WORK

  const data = useSelector((state) => state.selectedGlobalStats.data);
  const globalStats = data?.stats;
  console.log(globalStats);

  const dispatch = useDispatch();
  const fetchStats = async () => {
    const response = await axios
      .get('http://localhost:3050/data')
      .catch((err) => {
        console.log('Err: ', err);
      });
    dispatch(selectedGlobalStats(response.data));
  };

  useEffect(() => {
    fetchStats();
  }, []);

  // API WORK

  return (
    <div>
      <Typography variant="h4" className="heading">
        Global Crypto Stats
      </Typography>
      <br />

      <div className={classes.root}>
        <Grid
          container
          spacing={3}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={6} sm={6}>
            <Typography>Total Cryptocurrency</Typography>
            <br />
            <Typography variant="h6">{globalStats?.totalCoins}</Typography>
          </Grid>
          <Grid item xs={6} sm={6}>
            <Typography>Total Exchanges</Typography>
            <br />
            <Typography variant="h6">{globalStats?.totalExchanges}</Typography>
          </Grid>
          <Grid item xs={6} sm={6}>
            <Typography>Total Market Cap:</Typography>
            <br />
            <Typography variant="h6">
              $ {globalStats?.totalMarketCap}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6}>
            <Typography>Total 24h Volume</Typography>
            <br />
            <Typography variant="h6">
              $ {globalStats?.total24hVolume}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6}>
            <Typography>Total Cryptocurrencies</Typography>
            <br />
            <Typography variant="h6">{globalStats?.totalCoins}</Typography>
          </Grid>
          <Grid item xs={6} sm={6}>
            <Typography>Total Markets</Typography>
            <br />
            <Typography variant="h6">{globalStats?.totalMarkets} </Typography>
          </Grid>
        </Grid>
      </div>

      <div className="home-heading-container">
        <Typography variant="h4" className="home-title">
          Top 10 Cryptos In The World
        </Typography>
        <Typography className="show-more">Show more</Typography>
      </div>
      <br />

      <HomePageCards />
    </div>
  );
};

export default Homepage;
