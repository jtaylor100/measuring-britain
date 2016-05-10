// Generated by CoffeeScript 1.10.0
var $, ControlsNew, React, SunburstComponent, category_options, data, drawSunburst, value_options;

React = require('react');

ControlsNew = require('../chart-controls-new.js');

data = require('./data/pyramid-chart-controls.js');

drawSunburst = require('./d3/sunburst-partition.js');

$ = require('jQuery');

value_options = {
  districts: data.districts,
  ethnicities: data.ethnic_groups,
  religions: data.religions,
  regions: data.regions,
  countries: data.countries
};

category_options = data.category_options;

SunburstComponent = React.createClass({displayName: "SunburstComponent",
  componentDidMount: function() {
    if (this.props.isDefault === true && this.props.init_done === false) {
      return $(window).on('scroll', (function(_this) {
        return function() {
          var docHeight, docScrollTop, sunburstOffsetTop;
          docScrollTop = $(document).scrollTop();
          sunburstOffsetTop = $('.sunburst').offset().top + 750;
          docHeight = $(document).height();
          if ((docHeight - docScrollTop) < sunburstOffsetTop) {
            console.log('scroll reach');
            $(window).off('scroll');
            return _this.props.fetchSunburstData(null);
          }
        };
      })(this));
    }
  },
  reactDrawSunburst: function() {
    var sunburst;
    sunburst = drawSunburst({
      container: this.refs.sunburstSvg,
      data: this.props.data,
      isDefault: this.props.isDefault,
      onMouseOver: this.props.onMouseOver,
      activeCategory: this.props.activeCategory,
      activeValue: this.props.activeValue,
      onInitDone: this.props.onInitDone
    });
    if (this.props.isDefault === true && this.props.updateSunburst === true) {
      return sunburst.init();
    } else {
      return sunburst.update();
    }
  },
  componentDidUpdate: function() {
    if (this.props.updateSunburst === true) {
      return this.reactDrawSunburst();
    }
  },
  render: function() {
    return React.createElement("div", {
      "className": "col-xs-12 col-sm-12 mb-no-padding"
    }, React.createElement("div", {
      "className": "sunburst mt-medium"
    }, React.createElement(ControlsNew, React.__spread({}, this.props, {
      "omitted_category": "ethnicities",
      "categories": category_options,
      "values": value_options
    })), React.createElement("img", {
      "src": "./images/mb_ajax_loader.gif",
      "className": (this.props.isFetching === true && this.props.isDefault === true ? 'mb-spinner' : 'hide')
    }), React.createElement("svg", {
      "className": "sunburst-svg",
      "style": {
        width: '100%',
        height: '550px'
      },
      "ref": "sunburstSvg"
    }, React.createElement("g", {
      "className": "main-group"
    }), React.createElement("g", {
      "className": "key-group"
    }), React.createElement("g", {
      "className": "key-text-group"
    }), React.createElement("g", {
      "className": "center-text-group"
    }), React.createElement("g", {
      "className": "ethnic-group-text"
    }), React.createElement("g", {
      "className": "total-value-group"
    }), React.createElement("g", {
      "className": "percentage-group"
    }))));
  }
});

module.exports = SunburstComponent;

//# sourceMappingURL=ethnic-sunburst-component.map
