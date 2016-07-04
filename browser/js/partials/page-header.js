// Generated by CoffeeScript 1.10.0
var PageHeader, React;

React = require('react');

PageHeader = React.createClass({displayName: "PageHeader",
  capitalizeFirstLetter: function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  },
  render: function() {
    return React.createElement("div", {
      "className": "mb-page-header mb-hidden-mp"
    }, React.createElement("div", {
      "className": "container"
    }, React.createElement("h1", {
      "className": "text-center"
    }, this.capitalizeFirstLetter(this.props.page_header))));
  }
});

module.exports = PageHeader;
