// Generated by CoffeeScript 1.10.0
var EthnicSection, React, ReactDOM;

ReactDOM = require('react-dom');

React = require('react');

EthnicSection = function() {
  return React.createElement("div", {
    "className": "row mb-quicksand"
  }, React.createElement("div", {
    "className": "hidden-xs col-sm-12"
  }, React.createElement("h3", {
    "className": "mb-section-header"
  }, "Ethnic Diversity ", React.createElement("button", {
    "className": "btn btn-info btn-xs",
    "type": "button",
    "data-toggle": "collapse",
    "data-target": "#ethnicCollapse",
    "aria-expanded": "false",
    "aria-controls": "ethnicCollapse"
  }, React.createElement("span", {
    "className": "glyphicon glyphicon-info-sign",
    "aria-hidden": "true"
  }), "\t\t\t\t\tinfo")), React.createElement("div", null, React.createElement("div", {
    "className": "collapse mb-quicksand",
    "id": "ethnicCollapse"
  }, React.createElement("div", {
    "className": "alert alert-block alert-info mb-section-text"
  }, React.createElement("button", {
    "type": "button",
    "className": "close",
    "data-toggle": "collapse",
    "data-target": "#ethnicCollapse",
    "aria-expanded": "false",
    "aria-controls": "ethnicCollapse"
  }, "×"), React.createElement("p", null, React.createElement("strong", null, "Ethnic Diversity Sunburst")), React.createElement("p", null, "A ", React.createElement("strong", null, "constrictive"), " pyramid has fewer people in the younger age categories, perhaps as baby boom populations shift to more conservative birth rates. An ", React.createElement("strong", null, "expansive"), " pyramid represents greater numbers of people in the younger age categories and is typical of where birth rates are high and life expectancy is short. A ", React.createElement("strong", null, "stationary"), " pyramid shows roughly equal numbers of people in all age categories, with a tapering towards the older age categories.")))), React.createElement("div", {
    "className": "mb-oxygen mb-section-text"
  }, React.createElement("p", null, "The Ethnic Diversity chart shows the distribution of the population by age group and gender."))), React.createElement("div", {
    "className": "col-sm-12"
  }, React.createElement("div", {
    "id": "sunburst-controls"
  }), React.createElement("div", {
    "id": "sunburst-component"
  })));
};

module.exports = EthnicSection;
