import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
    '&:hover': {
      boxShadow: '-1px 10px 29px 0px rgba(0,0,0,0.8)',
    },
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function CryptocurrencyPageSearchBar() {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root} elevation={7}>
      <InputBase
        className={classes.input}
        placeholder="Search Cryptocurrencies"
        inputProps={{ 'aria-label': 'search cryptocurrency' }}
      />
      <IconButton className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
