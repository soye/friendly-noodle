import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import World from './components/World';

const App = props => (
  <Router>
    <div>
      <Route exact path="/" component={World} />
    </div>
  </Router>
);

export default App;
