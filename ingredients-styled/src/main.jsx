var React = require('react');
var ReactDOM = require('react-dom');
var ListManager = require('./components/ListManager.jsx');

ReactDOM.render(<ListManager title="These Ingredientss:" />,
  document.getElementById('ingredients'));
ReactDOM.render(<ListManager title="Foutons:" headingColor='beige'/>,
  document.getElementById('foutons'));
ReactDOM.render(<ListManager title="Open-Faced Sandwiches:"
  headingColor='aquamarine'/>, document.getElementById('sandwiches'));
