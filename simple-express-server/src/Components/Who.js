import React from 'react';
import {
  browserHistory,
  Link,
  Route,
  Router,
} from 'react-router';

let Who = React.createClass({

  render() {
    return (
      <div>
        <h1>Who dat?</h1>
        <img src="file/superface.png" />
      </div>
    );
  }
});

export default Who;
