// Generated by CoffeeScript 1.10.0
var Controls, FancySelect, PyramidComponent, React, Table, data, value_options;

React = require('react');

Controls = require('../chart-controls.js');

Table = require('./pyramid-table.js');

data = require('./data/pyramid-chart-controls.js');

FancySelect = require('react-select');

value_options = {
  districts: data.districts,
  ethnicities: data.ethnic_groups,
  religions: data.religions,
  regions: data.regions
};

PyramidComponent = React.createClass({displayName: "PyramidComponent",
  render: function() {
    return React.createElement("div", {
      "className": "col-xs-12 col-sm-8 mt-medium"
    }, React.createElement(Controls, React.__spread({}, this.props, {
      "categories": data.category_options,
      "values": value_options
    })), React.createElement("div", {
      "className": "pyramid mt-medium"
    }, React.createElement("svg", {
      "className": "pyramid-svg"
    }, React.createElement("g", {
      "className": "main"
    }), React.createElement("g", {
      "className": "overlay-group"
    }), React.createElement("g", {
      "className": "ticks-description"
    })), React.createElement("p", null, (this.props.showSpinner ? 'fetching..' : 'done'))));
  }
});

module.exports = PyramidComponent;
