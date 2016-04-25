// Generated by CoffeeScript 1.10.0
var $, Controls, FancySelect, Filter, React;

React = require('react');

FancySelect = require('react-select');

Filter = require('./chart-controls-filter.js');

$ = require('jQuery');

Controls = React.createClass({displayName: "Controls",
  render: function() {
    return React.createElement("div", {
      "className": "mb-form hidden-xs clearfix pl-medium"
    }, React.createElement("div", {
      "className": "mb-form-row col-sm-12 row"
    }, React.createElement("div", {
      "className": "col-sm-9 mb-no-padding"
    }, React.createElement("label", {
      "className": "col-sm-1"
    }, "Bars"), React.createElement("div", {
      "className": "mb-form-group col-sm-5 mb-oxygen"
    }, React.createElement(FancySelect, {
      "className": "mb-input-sm",
      "placeholder": "1. Choose a category",
      "options": this.props.categories,
      "value": (function(_this) {
        return function() {
          var category, i, len, ref;
          ref = _this.props.categories;
          for (i = 0, len = ref.length; i < len; i++) {
            category = ref[i];
            if (category.value === _this.props._barsCategory.value) {
              return category.label;
            }
          }
        };
      })(this)(),
      "onChange": this.props.onCategoryChange
    })), React.createElement("div", {
      "className": "mb-form-group col-sm-6 category-group mb-oxygen"
    }, React.createElement(FancySelect, {
      "className": "mb-input-sm",
      "placeholder": (function(_this) {
        return function() {
          var category, i, len, ref;
          ref = _this.props.categories;
          for (i = 0, len = ref.length; i < len; i++) {
            category = ref[i];
            if (category.value === _this.props._barsCategory.value) {
              return 'Search ' + category.value + '..';
            } else if (category.value !== _this.props._barsCategory.value) {
              continue;
            }
          }
          return '2. Choose a value';
        };
      })(this)(),
      "value": (this.props._barsValue.value !== 'default' ? this.props._barsValue.label : void 0),
      "options": (function(_this) {
        return function() {
          var category, i, len, ref;
          ref = _this.props.categories;
          for (i = 0, len = ref.length; i < len; i++) {
            category = ref[i];
            if (category.value === _this.props._barsCategory.value) {
              return _this.props.values[category.value];
            }
          }
        };
      })(this)(),
      "onChange": this.props.onValueChange
    }))), React.createElement("div", {
      "className": "col-sm-3 mb-no-padding"
    }, React.createElement("button", {
      "className": "btn btn-sm btn-primary mb-oxygen",
      "onClick": ((function(_this) {
        return function() {
          return _this.props.fetchPyramidData({
            outlineRequested: _this.props.outlineFilter === true ? true : false,
            bars: {
              isDefault: false,
              category: {
                label: _this.props._barsCategory.label,
                value: _this.props._barsCategory.value
              },
              value: {
                label: _this.props._barsValue.label,
                value: _this.props._barsValue.value
              }
            },
            outline: {
              isDefault: false,
              category: {
                label: _this.props._outlineCategory.label,
                value: _this.props._outlineCategory.value
              },
              value: {
                label: _this.props._outlineValue.label,
                value: _this.props._outlineValue.value
              }
            }
          });
        };
      })(this))
    }, "Go"), (function(_this) {
      return function() {
        if (_this.props.chartName === 'pyramid') {
          return React.createElement("button", {
            "className": (_this.props.outlineFilter === true ? "hide" : "btn btn-sm btn-default mb-oxygen ml-small mb-small-btn-gradient"),
            "type": "button",
            "onClick": _this.props.onAddOutline
          }, React.createElement("span", {
            "className": "glyphicon glyphicon-plus"
          }), (_this.props.outlineFilter === false ? " " + "Line" : ''));
        }
      };
    })(this)(), React.createElement("img", {
      "src": "./images/mb_ajax_loader.gif",
      "className": (this.props.isFetching === true && this.props.isDefault === false ? 'mb-spinner' : 'hide')
    }), (this.props.error === true ? React.createElement("span", {
      "className": "glyphicon glyphicon-remove pl-small mb-error-icon"
    }) : void 0))), (this.props.outlineFilter === true ? React.createElement(Filter, React.__spread({}, this.props)) : void 0));
  }
});

module.exports = Controls;
