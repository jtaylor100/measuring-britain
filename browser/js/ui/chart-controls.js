// Generated by CoffeeScript 1.10.0
var React, ReactDOM, chartControls;

React = require('react');

ReactDOM = require('react-dom');

chartControls = function() {
  var chartControlsComponent;
  return chartControlsComponent = React.createClass({displayName: "chartControlsComponent",
    render: function() {
      return React.createElement("form", {
        "className": "form-inline"
      }, React.createElement("div", {
        "className": "form-group"
      }, React.createElement("label", {
        "className": "control-label"
      }, "Filter by"), React.createElement("select", {
        "className": "form-control pyramid-controls-category input-sm"
      })), React.createElement("div", {
        "className": "form-group"
      }, React.createElement("select", {
        "className": "form-control pyramid-controls-value col-sm-10 chosen-select input-sm"
      })), React.createElement("div", {
        "className": "form-group"
      }, React.createElement("button", {
        "id": "pyramid-build",
        "type": "button",
        "className": "btn btn-primary btn-sm"
      }, "Go"), React.createElement("span", {
        "className": "glyphicon glyphicon-ok ajax-success invisible",
        "aria-hidden": "true"
      })));
    }
  });
};

module.exports = chartControls;
