var React = require('react');
var ListItem = require('./Listitem.jsx');

var ingredients = [{'id': 1, 'text': 'Eye of Newt'},
                   {'id': 2, 'text': 'Stanky Leg'},
                   {'id': 3, 'text': 'Turkey Leg'}];

var List = React.createClass({
  render: function() {
    var listItems = ingredients.map(function(item){
      return <ListItem key={item.id} ingredient={item.text}/>;
    });

    return (<ul>{listItems}</ul>);
  }
});

module.exports = List;
