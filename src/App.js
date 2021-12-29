import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './Components/About';
import ContactUs from './Components/ContactUs';
import Navbar from './Components/Navbar';
import Cryptocurrency from './Components/Cryptocurrency';
import Exchange from './Components/Exchange';
import News from './Components/News';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar />
          </Route>
          <Route exact path="/cryptocurrency">
            <Cryptocurrency />
          </Route>
          <Route exact path="/exchange">
            <Exchange />
          </Route>
          <Route exact path="/News">
            <News />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <ContactUs />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
