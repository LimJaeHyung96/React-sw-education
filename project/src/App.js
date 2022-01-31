import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Scoreboard from './Scoreboard/Scoreboard';
import Calendar from './Calendar/Calendar';
import Main from './A/Main';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/Scoreboard" component={Scoreboard} />
            <Route parh="/Calendar" component={Calendar} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
