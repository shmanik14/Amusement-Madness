import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './Components/NoMatch/NoMatch';
import Home from './Components/Home/Home';
import LeagueDetails from './Components/LeagueDetails/LeagueDetails';


function App() {
  return (
    <div>
      <Router>
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route to path="/league/:leagueId">
              <LeagueDetails></LeagueDetails>
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
      </Router>     
    </div>
  );
}

export default App;
