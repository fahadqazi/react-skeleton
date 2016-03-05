var React = require('react');
var ListItem = React.createClass({
  render: function () {
    return (
        <li>
            <p>{this.props.ingredient}</p>
        </li>
    );
  }
});

module.exports = ListItem;
