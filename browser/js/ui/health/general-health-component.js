// Generated by CoffeeScript 1.10.0
var ControlsNew, GenHealthChart, category_options, data, genHealthChart, value_options;

ControlsNew = require('../chart-controls-new.js');

data = require('../demographics/data/pyramid-chart-controls.js');

genHealthChart = require('./d3/gen-health-chart.js');

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
  componentDidUpdate: function() {
    var draw, highlights, svg;
    if (this.props.updateGenHealth === true) {
      draw = genHealthChart({
        container: this.refs.genHealthSvg,
        isDefault: this.props.isDefault,
        data: this.props.data,
        activeCategory: this.props.activeCategory,
        activeValue: this.props.activeValue,
        onMouseOver: this.props.onMouseOver,
        highlights: this.props._highlights
      });
      if (this.props.isDefault === true) {
        draw.init();
      } else {
        draw.update();
      }
    }
    if (this.props.updateHighlights === true) {
      highlights = this.props._highlights;
      svg = d3.select('.gen-health-svg');
      svg.selectAll('.line').transition().duration(250).attr('opacity', function(d) {
        if (highlights.length === 0) {
          return 1;
        } else if (highlights.indexOf(d.key) === -1) {
          return 0.1;
        } else {
          return 1;
        }
      });
      return svg.selectAll('.label').transition().duration(250).attr('opacity', function(d) {
        if (highlights.length === 0) {
          return 0.05;
        }
        if (highlights.indexOf(d.key) === -1) {
          return 0.05;
        } else {
          return 1;
        }
      });
    }
  },
  render: function() {
    return React.createElement("div", {
      "className": "col-xs-12 col-sm-12 mb-no-padding"
    }, React.createElement("div", {
      "className": "rel-bars mt-medium"
    }, React.createElement(ControlsNew, React.__spread({}, this.props, {
      "omitted_categories": ["ethnicities", "districts", "religions"],
      "categories": category_options,
      "values": value_options
    })), React.createElement("img", {
      "src": "./images/mb_ajax_loader.gif",
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
      "className": "main-group"
    }), React.createElement("g", {
      "className": "y axis"
    }), React.createElement("g", {
      "className": "x axis"
    }))));
  }
});

module.exports = GenHealthChart;

//# sourceMappingURL=general-health-component.map
