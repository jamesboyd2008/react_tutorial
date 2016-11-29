import React, {
  Component
} from 'react';
import {
  browserHistory,
  IndexRoute,
  Route,
  Router,
} from 'react-router';

import Who from './Components/Who.js';

class App extends Component {

  render() {
    return (
      <Router history={ browserHistory } >
        <Route path="/" component={Who}></Route>
      </Router>
    )
  }
}

export default App;
