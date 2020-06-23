import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';

const App = () => (
  <div className="min-h-screen flex justify-center items-center">
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/menu">
          <Menu />
        </Route>
      </Switch>
    </Router>
  </div>
);

export default App;
