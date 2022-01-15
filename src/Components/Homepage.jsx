import { Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import HomePageCards from './Cards/HomePageCards';
import { useSelector } from 'react-redux';

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

  const stats = useSelector((state) => state.globalStats.stats);
  console.log(stats);

  const { totalCryptocurrencies, totalExchanges, totalMarketCap } = stats[0];

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
            <Typography variant="h6">{totalCryptocurrencies}</Typography>
          </Grid>
          <Grid item xs={6} sm={6}>
            <Typography>Total Exchanges</Typography>
            <br />
            <Typography variant="h6">{totalExchanges}</Typography>
          </Grid>
          <Grid item xs={6} sm={6}>
            <Typography>Total Market Cap:</Typography>
            <br />
            <Typography variant="h6">$ {totalMarketCap} T</Typography>
          </Grid>
          <Grid item xs={6} sm={6}>
            <Typography>Total 24h Volume</Typography>
            <br />
            <Typography variant="h6">$ 137.9 B</Typography>
          </Grid>
          <Grid item xs={6} sm={6}>
            <Typography>Total Cryptocurrencies</Typography>
            <br />
            <Typography variant="h6">12,999</Typography>
          </Grid>
          <Grid item xs={6} sm={6}>
            <Typography>Total Markets</Typography>
            <br />
            <Typography variant="h6">82.2 K</Typography>
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
