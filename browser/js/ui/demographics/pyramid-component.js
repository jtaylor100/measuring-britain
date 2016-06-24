// Generated by CoffeeScript 1.10.0
var OnsAttr, PyramidComponent, PyramidControls, data, drawPyramid, value_options;

PyramidControls = require('./chart-controls-pyramid.js');

data = require('./data/pyramid-chart-controls.js');

drawPyramid = require('./d3/pyramid.js');

OnsAttr = require('../../partials/chart-ons-attribution.js');

value_options = {
  districts: data.districts,
  ethnicities: data.ethnic_groups,
  religions: data.religions,
  regions: data.regions,
  countries: data.countries
};

PyramidComponent = React.createClass({displayName: "PyramidComponent",
  getAppropriateHeight: function() {
    var window_height;
    window_height = $(window).height();
    if (window_height > 550) {
      return 600;
    } else {
      return window_height * 1.3;
    }
  },
  componentWillMount: function() {
    return this.props.fetchPyramidData(null);
  },
  componentDidMount: function() {
    return $(window).resize((function(_this) {
      return function() {
        return _this.onResize();
      };
    })(this));
  },
  onResize: function() {
    var ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, resizeChart;
    resizeChart = drawPyramid({
      resize: true,
      container: this.refs.pyramidSvg,
      ages: this.props.data.bars.ages,
      bar_males: this.props.data.bars.males,
      bar_females: this.props.data.bars.females,
      bar_males_perc: this.props.data.bars.malesPerc,
      bar_males_perc_format: this.props.data.bars.malesPercFormat,
      bar_males_sum: this.props.data.bars.malesSum,
      bar_females_perc: this.props.data.bars.femalesPerc,
      bar_females_perc_format: this.props.data.bars.femalesPercFormat,
      bar_females_sum: this.props.data.bars.femalesSum,
      outline_males: (ref = this.props.data.outline.males) != null ? ref : null,
      outline_females: (ref1 = this.props.data.outline.females) != null ? ref1 : null,
      outline_males_perc: (ref2 = this.props.data.outline.malesPerc) != null ? ref2 : null,
      outline_males_perc_format: (ref3 = this.props.data.outline.malesPercFormat) != null ? ref3 : null,
      outline_males_sum: (ref4 = this.props.data.outline.malesSum) != null ? ref4 : null,
      outline_females_perc: (ref5 = this.props.data.outline.femalesPerc) != null ? ref5 : null,
      outline_females_perc_format: (ref6 = this.props.data.outline.femalesPercFormat) != null ? ref6 : null,
      outline_females_sum: (ref7 = this.props.data.outline.femalesSum) != null ? ref7 : null,
      overlay_data: this.props.data.bars.overlayData,
      onMouseOver: this.props.onMouseOver,
      onFirstLineDrawn: this.props.onFirstLineDrawn,
      isDefault: this.props.isDefault,
      outlineFilter: this.props.outlineFilter,
      updatePyramid: this.props.updatePyramid,
      updateOutline: this.props.updateOutline,
      activeLineCategory: this.props.activeLineCategory,
      activeLineValue: this.props.activeLineValue,
      isFirstLine: this.props.isFirstLine
    });
    return resizeChart();
  },
  componentDidUpdate: function() {
    var pyramid, ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7;
    if (this.props.updatePyramid === true || this.props.updateOutline === true) {
      pyramid = drawPyramid({
        resize: false,
        container: this.refs.pyramidSvg,
        ages: this.props.data.bars.ages,
        bar_males: this.props.data.bars.males,
        bar_females: this.props.data.bars.females,
        bar_males_perc: this.props.data.bars.malesPerc,
        bar_males_perc_format: this.props.data.bars.malesPercFormat,
        bar_males_sum: this.props.data.bars.malesSum,
        bar_females_perc: this.props.data.bars.femalesPerc,
        bar_females_perc_format: this.props.data.bars.femalesPercFormat,
        bar_females_sum: this.props.data.bars.femalesSum,
        outline_males: (ref = this.props.data.outline.males) != null ? ref : null,
        outline_females: (ref1 = this.props.data.outline.females) != null ? ref1 : null,
        outline_males_perc: (ref2 = this.props.data.outline.malesPerc) != null ? ref2 : null,
        outline_males_perc_format: (ref3 = this.props.data.outline.malesPercFormat) != null ? ref3 : null,
        outline_males_sum: (ref4 = this.props.data.outline.malesSum) != null ? ref4 : null,
        outline_females_perc: (ref5 = this.props.data.outline.femalesPerc) != null ? ref5 : null,
        outline_females_perc_format: (ref6 = this.props.data.outline.femalesPercFormat) != null ? ref6 : null,
        outline_females_sum: (ref7 = this.props.data.outline.femalesSum) != null ? ref7 : null,
        overlay_data: this.props.data.bars.overlayData,
        onMouseOver: this.props.onMouseOver,
        onFirstLineDrawn: this.props.onFirstLineDrawn,
        isDefault: this.props.isDefault,
        outlineFilter: this.props.outlineFilter,
        updatePyramid: this.props.updatePyramid,
        updateOutline: this.props.updateOutline,
        activeLineCategory: this.props.activeLineCategory,
        activeLineValue: this.props.activeLineValue,
        isFirstLine: this.props.isFirstLine
      });
      return pyramid();
    }
  },
  render: function() {
    return React.createElement("div", null, React.createElement(PyramidControls, React.__spread({}, this.props, {
      "categories": data.category_options,
      "values": value_options
    })), React.createElement("div", {
      "className": "pyramid mt-medium"
    }, React.createElement("img", {
      "src": "/images/mb_ajax_loader.gif",
      "className": (this.props.isFetching === true && this.props.isDefault === true ? 'mb-spinner' : 'hide')
    }), React.createElement("svg", {
      "className": "pyramid-svg",
      "style": {
        width: '100%',
        height: this.getAppropriateHeight()
      },
      "ref": "pyramidSvg"
    }, React.createElement("g", {
      "className": "title-group"
    }), React.createElement("g", {
      "className": "main-group"
    }, React.createElement("g", {
      "className": "left-group"
    }), React.createElement("g", {
      "className": "right-group"
    }), React.createElement("g", {
      "className": "key-group"
    }, React.createElement("g", {
      "className": "male-key-group"
    }), React.createElement("g", {
      "className": "female-key-group"
    }))), React.createElement("g", {
      "className": "overlay-group"
    }), React.createElement("g", {
      "className": "ticks-group mb-oxygen"
    }, React.createElement("g", {
      "className": "y axis"
    }), React.createElement("g", {
      "className": "x axis left"
    }), React.createElement("g", {
      "className": "x axis right"
    }))), React.createElement(OnsAttr, null)));
  }
});

module.exports = PyramidComponent;

//# sourceMappingURL=pyramid-component.map