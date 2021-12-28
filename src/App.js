import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ResponsiveDrawer from './Components/Navbar';
import About from './Components/About';

function App() {
  return (
    <>
    
    <Router>     
        <Switch>
        <Route exact path="/" >
        <ResponsiveDrawer />
          </ Route>
          <Route exact path="/about" >
          <About />
          </ Route>
        </Switch>
    </Router>

    
   </>
  );
}

export default App;
