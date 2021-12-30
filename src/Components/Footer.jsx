import React from 'react';
import { Container, Typography } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    color: 'white',
    textAlign: 'center',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
  },
  made: {
    paddingTop: '10px',
    textAlign: 'center',
    fontSize: '20px',
    color: 'white',
    display: 'inline-flex',
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className="footer">
      <Typography className={classes.root}>
        Copyright ©
        <Link className={classes.link} href="https://mdakram09.netlify.app/">
          {' '}
          Md Akram Khan
        </Link>{' '}
        . All Rights Reserved.
      </Typography>
      <Typography className={classes.made}>
        Made in India{' '}
        <img
          style={{ paddingLeft: '10px' }}
          src="https://img.icons8.com/color/28/000000/india.png"
          alt="India"
        />
      </Typography>
    </div>
  );
};

export default Footer;
