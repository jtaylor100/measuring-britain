// Generated by CoffeeScript 1.10.0
var FancySelect, Filter, React;

React = require('react');

FancySelect = require('react-select');

Filter = React.createClass({displayName: "Filter",
  render: function() {
    return React.createElement("div", {
      "className": "col-sm-12 row mt-small"
    }, React.createElement("div", {
      "className": "col-sm-9 mb-no-padding"
    }, React.createElement("label", {
      "className": "col-sm-1"
    }, "Outline"), React.createElement("div", {
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
            if (category.value === _this.props.outlineCategory) {
              return category.label;
            }
          }
        };
      })(this)(),
      "onChange": this.props.onOutlineCategoryChange
    })), React.createElement("div", {
      "className": "mb-form-group category-group col-sm-6 mb-oxygen"
    }, React.createElement(FancySelect, {
      "className": "mb-input-sm",
      "placeholder": (function(_this) {
        return function() {
          var category, i, len, ref;
          ref = _this.props.categories;
          for (i = 0, len = ref.length; i < len; i++) {
            category = ref[i];
            if (category.value === _this.props.outlineCategory) {
              return 'Search ' + category.value + '..';
            } else if (category.value !== _this.props.outlineCategory) {
              continue;
            }
          }
          return '2. Choose a value';
        };
      })(this)(),
      "options": (function(_this) {
        return function() {
          var category, i, len, ref;
          ref = _this.props.categories;
          for (i = 0, len = ref.length; i < len; i++) {
            category = ref[i];
            if (category.value === _this.props.outlineCategory) {
              return _this.props.values[category.value];
            }
          }
        };
      })(this)()
    }))));
  }
});

module.exports = Filter;
