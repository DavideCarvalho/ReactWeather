import React from 'react';
import { BrowserRouter as Router, Route, Switch, RouteComponentProps } from 'react-router-dom';
import App from './App';
import { Weather } from './components/Weather';
import { About } from './components/About';
import { Examples } from './components/Examples';

const app = (
  <Router>
    <App>
      <Switch>
        <Route path="/" exact component={(props: RouteComponentProps) => <Weather {...props}/>} />
        <Route path="/about" exact component={About} />
        <Route path="/examples" exact component={Examples} />
      </Switch>
    </App>
  </Router>
);

export default app;