// Generated by CoffeeScript 1.10.0
var DisabilitySection, React;

React = require('react');

DisabilitySection = function() {
  return React.createElement("div", {
    "className": "row mb-quicksand"
  }, React.createElement("div", {
    "className": "hidden-xs col-sm-12"
  }, React.createElement("h3", {
    "className": "mb-section-header"
  }, "Long-term illness or disability by ethnicity ", React.createElement("button", {
    "className": "btn btn-info btn-xs",
    "type": "button",
    "data-toggle": "collapse",
    "data-target": "#disabilityCollapse",
    "aria-expanded": "false",
    "aria-controls": "disabilityCollapse"
  }, React.createElement("span", {
    "className": "glyphicon glyphicon-info-sign",
    "aria-hidden": "true"
  }), "\t\t\t\t\tinfo")), React.createElement("div", null, React.createElement("div", {
    "className": "collapse mb-quicksand",
    "id": "disabilityCollapse"
  }, React.createElement("div", {
    "className": "alert alert-block alert-info mb-section-text"
  }, React.createElement("button", {
    "type": "button",
    "className": "close",
    "data-toggle": "collapse",
    "data-target": "#disabilityCollapse",
    "aria-expanded": "false",
    "aria-controls": "disabilityCollapse"
  }, "×"), React.createElement("p", null, React.createElement("strong", null, "Overview")), React.createElement("p", null, "A look at the health of the population of England and Wales in respect to activity limiting health problems or disabilities. This chart shows the proportion of each age group (across 18 different ethnicites) who have indicated that their day-to-day activities are \'limited a lot\' by their illness\x2Fdisability."), React.createElement("p", null, React.createElement("strong", null, "Usage")), React.createElement("p", null, "Hover over the bars to reveal a tooltip that tells you the % of people with a long-term health problem\x2Fdisability.")))), React.createElement("div", {
    "className": "mb-oxygen mb-section-text"
  }, React.createElement("p", null, "The ethnic Disparities in long-term illness and disability chart shows the number and percentage of the population with a long-term illness or disability broken down by age group and ethnicity."))), React.createElement("div", {
    "className": "col-sm-12"
  }, React.createElement("div", {
    "id": "health-disability-controls"
  }), React.createElement("div", {
    "id": "health-disability-component"
  })));
};

module.exports = DisabilitySection;