import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import Exchange from './Exchange';

import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import EqualizerOutlinedIcon from '@material-ui/icons/EqualizerOutlined';
import BusinessOutlinedIcon from '@material-ui/icons/BusinessOutlined';
import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined';
import InfoIcon from '@material-ui/icons/Info';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import { Avatar } from '@material-ui/core';

import Icon from '../Images/cryptocurrency.png';
import Mario from '../Images/mario-av.png';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  logo: {
    height: '50px',
    width: '50px',
    marginRight: '1vw',
  },
  navLink: {
    textDecoration: 'none',
  },
}));

function ExchangeImport(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />

      <List component="nav" aria-label="main mailbox folders">
        <Link className={classes.navLink} to="/">
          <ListItem button>
            <ListItemIcon>
              <HomeOutlinedIcon color="primary" />
            </ListItemIcon>

            <ListItemText primary="Home" />
          </ListItem>
        </Link>
        <Link className={classes.navLink} to="/cryptocurrency">
          <ListItem button>
            <ListItemIcon>
              <EqualizerOutlinedIcon color="primary" />
            </ListItemIcon>

            <ListItemText primary="Cryptocurrency" />
          </ListItem>
        </Link>
        <Link className={classes.navLink} to="/exchange">
          <ListItem button>
            <ListItemIcon>
              <BusinessOutlinedIcon color="primary" />
            </ListItemIcon>

            <ListItemText primary="Exchange" />
          </ListItem>
        </Link>
        <Link className={classes.navLink} to="/news">
          <ListItem button>
            <ListItemIcon>
              <AccountBalanceOutlinedIcon color="primary" />
            </ListItemIcon>

            <ListItemText primary="News" />
          </ListItem>
        </Link>
        <Link className={classes.navLink} to="/about">
          <ListItem button>
            <ListItemIcon>
              <InfoIcon color="primary" />
            </ListItemIcon>

            <ListItemText primary="About Us" />
          </ListItem>
        </Link>
        <Link className={classes.navLink} to="/contact">
          <ListItem button>
            <ListItemIcon>
              <ContactMailIcon color="primary" />
            </ListItemIcon>

            <ListItemText primary="Contact Us" />
          </ListItem>
        </Link>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <img className={classes.logo} src={Icon} alt="logo" />
          <Typography variant="h6" noWrap>
            MyCryptoverse
          </Typography>
          <Avatar
            edge="end"
            className="right-hold flexbox"
            style={{ marginRight: '1vw' }}
            src={Mario}
          />
          <Typography className="right-hold flexbox">Mario</Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />

        <Exchange />
      </main>
    </div>
  );
}

ExchangeImport.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ExchangeImport;
