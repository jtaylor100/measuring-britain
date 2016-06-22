// Generated by CoffeeScript 1.10.0
var BarsComponent, ControlsNew, OnsAttr, category_options, data, drawRelBars, value_options;

ControlsNew = require('../chart-controls-new.js');

data = require('./data/pyramid-chart-controls.js');

drawRelBars = require('./d3/bar-chart.js');

OnsAttr = require('../../partials/chart-ons-attribution.js');

value_options = {
  districts: data.districts,
  ethnicities: data.ethnic_groups,
  religions: data.religions,
  regions: data.regions,
  countries: data.countries
};

category_options = data.category_options;

BarsComponent = React.createClass({displayName: "BarsComponent",
  componentDidMount: function() {
    if (this.props.isDefault === true && this.props.init_done === false) {
      return this.props.fetchReligionData(null);
    }
  },
  reactDrawBars: function() {
    var bars;
    bars = drawRelBars({
      container: this.refs.barsSvg,
      data: this.props.data,
      isDefault: this.props.isDefault,
      onMouseOver: this.props.onMouseOver,
      activeCategory: this.props.activeCategory,
      activeValue: this.props.activeValue,
      onInitDone: this.props.onInitDone
    });
    if (this.props.isDefault === true && this.props.updateRelBars === true) {
      return bars.init();
    } else {
      return bars.update();
    }
  },
  componentDidUpdate: function() {
    if (this.props.updateRelBars === true) {
      return this.reactDrawBars();
    }
  },
  render: function() {
    return React.createElement("div", {
      "className": "col-xs-12 col-sm-12 mb-no-padding"
    }, React.createElement("div", {
      "className": "rel-bars mt-medium"
    }, React.createElement(ControlsNew, React.__spread({}, this.props, {
      "omitted_categories": ["religions"],
      "categories": category_options,
      "values": value_options
    })), React.createElement("img", {
      "src": "/images/mb_ajax_loader.gif",
      "className": (this.props.isFetching === true && this.props.isDefault === true ? 'mb-spinner' : 'hide')
    }), React.createElement("svg", {
      "className": "bars-svg mb-oxygen",
      "style": {
        width: '100%',
        height: '425px'
      },
      "ref": "barsSvg"
    }, React.createElement("g", {
      "className": "main-group"
    }), React.createElement("g", {
      "className": "labels-group"
    }), React.createElement("g", {
      "className": "x axis"
    }), React.createElement("g", {
      "className": "detail-group mb-quicksand"
    })), React.createElement(OnsAttr, null)));
  }
});

module.exports = BarsComponent;
