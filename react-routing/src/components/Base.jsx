var React = require('react');

var Base = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Header, Header H.</h1>
        {this.props.children}
        <h1>Footer, Footy F.</h1>
      </div>
    )
  }
});

module.exports = Base;
