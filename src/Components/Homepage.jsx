import { Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectedGlobalStats } from '../redux/actions/actions';

import CryptocurrencyCards from './Cards/CryptocurrencyCards';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  showMore: {
    textDecoration: 'none',
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#5a25ed',
  },
}));

const Homepage = () => {
  const classes = useStyles();

  // API WORK

  const data = useSelector((state) => state.selectedGlobalStats.data);
  const globalStats = data?.stats;
  console.log(globalStats);
  const coins = data?.coins.slice(0, 10);
  console.log(coins);

  const dispatch = useDispatch();
  const fetchStats = async () => {
    const response = await axios
      .get('https://coinranking1.p.rapidapi.com/coins', {
        headers: {
          'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
          'x-rapidapi-key':
            '5072e94426msh03f7a8cfae454cep1ecdb9jsn73bce904f298',
        },
      })
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

        <Link className={classes.showMore} to="/cryptocurrency" variant="body2">
          Show more
        </Link>
      </div>
      <br />

      <Grid
        container
        spacing={3}
        style={{
          display: 'flex',
          justifyContent: 'center',
          align: 'center',
        }}
      >
        {coins?.map((currency) => (
          <Grid item xs={6} sm={4} md={4} lg={4} key={currency.id}>
            <CryptocurrencyCards
              key={currency.id}
              name={currency.name}
              icon={currency.iconUrl}
              price={currency.price}
              marketCap={currency.marketCap}
              change={currency.change}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Homepage;
