var React = require('react');
var ListItem = React.createClass({
  render: function() {
    return (
      <li>
        <h4>{this.props.indgredient}</h4>
      </li>
    );
  }
});

module.exports = ListItem;
