import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomepageImport from './Components/HomepageImport';
import AboutImport from './Components/AboutImport';
import ContactusImport from './Components/ContactusImport';
import CryptocurrencyImport from './Components/CryptocurrencyImport';
import ExchangeImport from './Components/ExchangeImport';
import NewsImport from './Components/NewsImport';
import { Typography } from '@material-ui/core';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomepageImport />
          </Route>
          <Route exact path="/cryptocurrency">
            <CryptocurrencyImport />
          </Route>
          <Route exact path="/exchange">
            <ExchangeImport />
          </Route>
          <Route exact path="/News">
            <NewsImport />
          </Route>
          <Route exact path="/about">
            <AboutImport />
          </Route>
          <Route exact path="/contact">
            <ContactusImport />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
