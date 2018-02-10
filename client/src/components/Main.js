import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Lists from './Lists.js';
import About from './About.js';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Lists} />
      <Route exact path='/about' component={About} />
    </Switch>
  </main>
)

export default Main;
