import React from 'react';
import CryptocurrencyPageSearchBar from './CryptocurrencyPageSearchBar';
import CryptocurrencyCards from './Cards/CryptocurrencyCards';
import { makeStyles } from '@material-ui/core/styles';

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
