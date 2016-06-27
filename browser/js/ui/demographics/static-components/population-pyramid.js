// Generated by CoffeeScript 1.10.0
var PopulationPyramid;

PopulationPyramid = function() {
  return React.createElement("div", {
    "className": "row mb-quicksand"
  }, React.createElement("div", {
    "className": "hidden-xs col-sm-4"
  }, React.createElement("h3", {
    "className": "mb-section-header"
  }, "Population Pyramid ", React.createElement("button", {
    "className": "btn btn-info btn-xs",
    "type": "button",
    "data-toggle": "collapse",
    "data-target": "#pyrCollapse",
    "aria-expanded": "false",
    "aria-controls": "pyrCollapse"
  }, React.createElement("span", {
    "className": "glyphicon glyphicon-info-sign",
    "aria-hidden": "true"
  }), "\t\t\t\t\tinfo")), React.createElement("div", null, React.createElement("div", {
    "className": "collapse mb-quicksand",
    "id": "pyrCollapse"
  }, React.createElement("div", {
    "className": "alert alert-block alert-info mb-section-text"
  }, React.createElement("button", {
    "type": "button",
    "className": "close",
    "data-toggle": "collapse",
    "data-target": "#pyrCollapse",
    "aria-expanded": "false",
    "aria-controls": "pyrCollapse"
  }, "×"), React.createElement("p", null, React.createElement("strong", null, "Types of Population Pyramids")), React.createElement("p", null, "A ", React.createElement("strong", null, "contracting"), " pyramid has fewer people in the younger age categories, perhaps as baby boom populations shift to more conservative birth rates."), React.createElement("img", {
    "src": "/images/DTM_Pyramids1_contracting.png",
    "className": "mb-pyramid-states mb-single-img"
  }), React.createElement("p", null, "An ", React.createElement("strong", null, "expanding"), " pyramid represents greater numbers of people in the younger age categories and is typical of where birth rates are high and life expectancy is short."), React.createElement("img", {
    "src": "/images/DTM_Pyramids1_expanding.png",
    "className": "mb-pyramid-states mb-double-img"
  }), React.createElement("p", null, "A ", React.createElement("strong", null, "stationary"), " pyramid shows roughly equal numbers of people in all age categories, with a tapering towards the older age categories."), React.createElement("img", {
    "src": "/images/DTM_Pyramids1_stationary.png",
    "className": "mb-pyramid-states mb-single-img"
  })))), React.createElement("div", {
    "className": "mb-oxygen mb-section-text"
  }, React.createElement("p", null, "The Population Pyramid chart shows the distribution of the population by age group and gender.")), React.createElement("div", {
    "id": "pyramid-table"
  }), React.createElement("div", {
    "id": "pyramid-bars"
  })), React.createElement("div", {
    "className": "col-xs-12 col-sm-8 mt-medium"
  }, React.createElement("div", {
    "id": "pyramid-container"
  })));
};

module.exports = PopulationPyramid;
