import React, { useEffect } from 'react';
import CryptocurrencyPageSearchBar from './CryptocurrencyPageSearchBar';
import CryptocurrencyCards from './Cards/CryptocurrencyCards';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectedGlobalStats } from '../redux/actions/actions';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    left: '50%',
    top: '15%',
    transform: 'translate(-50%, -50%)',
  },
}));

const Cryptocurrency = () => {
  const classes = useStyles();

  // API WORK

  const data = useSelector((state) => state.selectedGlobalStats.data);
  const coins = data?.coins;
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
  });

  // API WORK

  return (
    <>
      <div className={classes.root}>
        <CryptocurrencyPageSearchBar />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        {/* <Grid item xs={6} sm={3}>
          {coins?.map((currency) => (
            <CryptocurrencyCards />
          ))}
        </Grid> */}

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
    </>
  );
};

export default Cryptocurrency;
