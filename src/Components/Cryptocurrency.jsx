import React, { useEffect } from 'react';
import CryptocurrencyPageSearchBar from './CryptocurrencyPageSearchBar';
import CryptocurrencyCards from './Cards/CryptocurrencyCards';
import { makeStyles } from '@material-ui/core/styles';
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
        <CryptocurrencyCards />
      </div>
    </>
  );
};

export default Cryptocurrency;
