import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';

import './App.css';

const HatPage = () => <div>Hello Hat Page</div>;

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/hats" component={HatPage} />
    </Switch>
  </div>
);

export default App;
