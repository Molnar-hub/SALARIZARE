import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import Home from './components/Home';
import IntroducereDate from './components/IntroducereDate';
import Istoric from './components/Istoric';
import Pontaj from './components/Pontaj';
import Rapoarte from './components/Rapoarte';
import StatPlata from './components/StatPlata';

import './App.css';


function App() {
  return (
    <Router>
        <div className="App">
          <ul >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/pontaj">Pontaj</Link>
            </li>
            <li>
              <Link to="/statplata">Stat Plata</Link>
            </li>
            <li>
              <Link to="/introduceredate">Introducere Date</Link>
            </li>
            <li>
              <Link to="/rapoartesalariati">Rapoarte Salariati</Link>
            </li>
            <li>
              <Link to="/istoric">Istoric</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/pontaj">
                <Pontaj />
            </Route>
            <Route path="/statplata">
                <StatPlata />
            </Route>
            <Route path="/istoric">
                <Istoric />
            </Route>
            <Route path="/introduceredate">
                <IntroducereDate />
            </Route>
            <Route path="/rapoartesalariati">
                <Rapoarte />
            </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
