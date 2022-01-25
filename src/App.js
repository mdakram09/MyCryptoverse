import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomepageContainer from './Components/HomepageContainer';
import AboutContainer from './Components/AboutContainer';
import ContactusContainer from './Components/ContactusContainer';
import CryptocurrencyContainer from './Components/CryptocurrencyContainer';
import ExchangeContainer from './Components/ExchangeContainer';
import NewsContainer from './Components/NewsContainer';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomepageContainer />
          </Route>
          <Route exact path="/cryptocurrency">
            <CryptocurrencyContainer />
          </Route>
          <Route exact path="/exchange">
            <ExchangeContainer />
          </Route>
          <Route exact path="/News">
            <NewsContainer />
          </Route>
          <Route exact path="/about">
            <AboutContainer />
          </Route>
          <Route exact path="/contact">
            <ContactusContainer />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
