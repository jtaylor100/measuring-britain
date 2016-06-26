// Generated by CoffeeScript 1.10.0
var ControlsNew, GenHealthChart, OnsAttr, category_options, data, genHealthChart, value_options;

ControlsNew = require('../chart-controls-new.js');

data = require('../demographics/data/pyramid-chart-controls.js');

genHealthChart = require('./d3/gen-health-chart.js');

OnsAttr = require('../../partials/chart-ons-attribution.js');

value_options = {
  districts: data.districts,
  ethnicities: data.ethnic_groups,
  religions: data.religions,
  regions: data.regions,
  countries: data.countries
};

category_options = data.category_options;

GenHealthChart = React.createClass({displayName: "GenHealthChart",
  componentWillMount: function() {
    return this.props.fetchGenHealthData(null);
  },
  componentDidMount: function() {
    return $(window).resize((function(_this) {
      return function() {
        return _this.onResize();
      };
    })(this));
  },
  onResize: function() {
    var draw;
    draw = genHealthChart({
      resize: true,
      container: this.refs.genHealthSvg,
      isDefault: this.props.isDefault,
      data: this.props.data,
      activeCategory: this.props.activeCategory,
      activeValue: this.props.activeValue,
      onMouseOver: this.props.onMouseOver,
      highlights: this.props._highlights,
      updateHighlights: this.props.updateHighlights
    });
    return draw.resize();
  },
  componentDidUpdate: function() {
    var draw;
    if (this.props.updateGenHealth === true) {
      draw = genHealthChart({
        resize: false,
        container: this.refs.genHealthSvg,
        isDefault: this.props.isDefault,
        data: this.props.data,
        activeCategory: this.props.activeCategory,
        activeValue: this.props.activeValue,
        onMouseOver: this.props.onMouseOver,
        highlights: this.props._highlights,
        updateHighlights: this.props.updateHighlights
      });
      if (this.props.isDefault === true) {
        return draw.init();
      } else {
        return draw.update();
      }
    }
    if (this.props.updateHighlights === true) {
      draw = genHealthChart({
        data: this.props.data,
        highlights: this.props._highlights,
        updateHighlights: this.props.updateHighlights
      });
      return draw.highlightDetail();
    }
  },
  render: function() {
    return React.createElement("div", {
      "className": "col-xs-12 col-sm-12 mb-no-padding"
    }, React.createElement("div", {
      "className": "mt-medium"
    }, React.createElement(ControlsNew, React.__spread({}, this.props, {
      "omitted_categories": ["ethnicities", "districts", "religions"],
      "categories": category_options,
      "values": value_options
    })), React.createElement("img", {
      "src": "/images/mb_ajax_loader.gif",
      "className": (this.props.isFetching === true && this.props.isDefault === true ? 'mb-spinner' : 'hide')
    }), React.createElement("svg", {
      "className": "gen-health-svg mb-oxygen",
      "style": {
        width: '100%',
        height: '485px'
      },
      "ref": "genHealthSvg"
    }, React.createElement("g", {
      "className": "title-group mb-oxygen"
    }), React.createElement("g", {
      "className": "y axis"
    }), React.createElement("g", {
      "className": "x axis"
    }), React.createElement("g", {
      "className": "main-group"
    })), React.createElement(OnsAttr, null)));
  }
});

module.exports = GenHealthChart;

//# sourceMappingURL=general-health-component.map
