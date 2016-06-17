// Generated by CoffeeScript 1.10.0
var DisabilitySection, EthnicSection, Footer, GeneralHealthSection, ReligiousSection, _path, bootstrap, bootstrap_tooltips, path, raw_path, renderDemographics, renderEmploymentStatusByCountry, renderEthnicDiversity, renderEthnicGenHealth, renderHealth, renderHealthDisability, renderLabour, renderPopulationPyramid, renderReligiousDiversity;

window.React = require('react');

window.ReactDOM = require('react-dom');

window.d3 = require('d3');

window.$ = require('jquery');

bootstrap = require('../../bootstrap-sass/javascripts/bootstrap.min.js');

bootstrap_tooltips = require('../../bootstrap-sass/javascripts/bootstrap/tooltip.js');

EthnicSection = require('./ui/demographics/static-components/ethnic-diversity.js');

ReligiousSection = require('./ui/demographics/static-components/religious-diversity.js');

GeneralHealthSection = require('./ui/health/static-components/general-health.js');

DisabilitySection = require('./ui/health/static-components/health-disability.js');

Footer = require('./partials/footer.js');

path = location.pathname.split('/')[1];

_path = path;

raw_path = location.pathname;

$("." + path).addClass('active');

renderDemographics = function() {
  var render;
  render = require('./redux/demographics.js');
  ReactDOM.render(React.createElement(EthnicSection, null), document.getElementById('mb_ethnic_diversity'));
  ReactDOM.render(React.createElement(ReligiousSection, null), document.getElementById('mb_religious_diversity'));
  return render();
};

renderHealth = function() {
  var render;
  render = require('./redux/health.js');
  ReactDOM.render(React.createElement(GeneralHealthSection, null), document.getElementById('mb_general_health'));
  ReactDOM.render(React.createElement(DisabilitySection, null), document.getElementById('mb_health_disability'));
  return render();
};

renderLabour = function() {
  var render;
  render = require('./redux/labour.js');
  return render();
};

renderPopulationPyramid = function() {
  var Nav, PageHeader, PopulationPyramid, render;
  render = require('./redux/renderers/population-pyramid.js');
  PageHeader = require('./partials/page-header.js');
  Nav = require('./partials/nav.js');
  PopulationPyramid = require('./ui/demographics/static-components/population-pyramid.js');
  ReactDOM.render(React.createElement(Nav, {
    "active": _path,
    "border": 'yes'
  }), document.getElementById('react_nav_container'));
  ReactDOM.render(React.createElement(PageHeader, {
    "page_header": 'Population Pyramid - Census'
  }), document.getElementById('mb_page_header'));
  ReactDOM.render(React.createElement(PopulationPyramid, null), document.getElementById('react_container'));
  ReactDOM.render(React.createElement(Footer, null), document.getElementById('mb_footer'));
  return render();
};

renderEthnicDiversity = function() {
  var EthnicDiversity, Nav, PageHeader, render;
  render = require('./redux/renderers/ethnic-diversity.js');
  PageHeader = require('./partials/page-header.js');
  Nav = require('./partials/nav.js');
  EthnicDiversity = require('./ui/demographics/static-components/ethnic-diversity.js');
  ReactDOM.render(React.createElement(Nav, {
    "active": _path,
    "border": 'yes'
  }), document.getElementById('react_nav_container'));
  ReactDOM.render(React.createElement(PageHeader, {
    "page_header": 'Ethnic Diversity - Census'
  }), document.getElementById('mb_page_header'));
  ReactDOM.render(React.createElement(EthnicDiversity, null), document.getElementById('react_container'));
  ReactDOM.render(React.createElement(Footer, null), document.getElementById('mb_footer'));
  return render();
};

renderReligiousDiversity = function() {
  var Nav, PageHeader, ReligiousDiversity, render;
  render = require('./redux/renderers/religious-diversity.js');
  PageHeader = require('./partials/page-header.js');
  Nav = require('./partials/nav.js');
  ReligiousDiversity = require('./ui/demographics/static-components/religious-diversity.js');
  ReactDOM.render(React.createElement(Nav, {
    "active": _path,
    "border": 'yes'
  }), document.getElementById('react_nav_container'));
  ReactDOM.render(React.createElement(PageHeader, {
    "page_header": 'Religious Diversity - Census'
  }), document.getElementById('mb_page_header'));
  ReactDOM.render(React.createElement(ReligiousDiversity, null), document.getElementById('react_container'));
  ReactDOM.render(React.createElement(Footer, null), document.getElementById('mb_footer'));
  return render();
};

renderEthnicGenHealth = function() {
  var EthnicGenHealth, Nav, PageHeader, render;
  render = require('./redux/renderers/ethnic-general-health.js');
  PageHeader = require('./partials/page-header.js');
  Nav = require('./partials/nav.js');
  EthnicGenHealth = require('./ui/health/static-components/general-health.js');
  ReactDOM.render(React.createElement(Nav, {
    "active": _path,
    "border": 'yes'
  }), document.getElementById('react_nav_container'));
  ReactDOM.render(React.createElement(PageHeader, {
    "page_header": "Ethnic Disparities in General Health - Census"
  }), document.getElementById('mb_page_header'));
  ReactDOM.render(React.createElement(EthnicGenHealth, null), document.getElementById('react_container'));
  ReactDOM.render(React.createElement(Footer, null), document.getElementById('mb_footer'));
  return render();
};

renderHealthDisability = function() {
  var HealthDisability, Nav, PageHeader, render;
  render = require('./redux/renderers/health-disability.js');
  PageHeader = require('./partials/page-header.js');
  Nav = require('./partials/nav.js');
  HealthDisability = require('./ui/health/static-components/health-disability.js');
  ReactDOM.render(React.createElement(Nav, {
    "active": _path,
    "border": 'yes'
  }), document.getElementById('react_nav_container'));
  ReactDOM.render(React.createElement(PageHeader, {
    "page_header": "Long-term illness/disability by ethnicity - Census"
  }), document.getElementById('mb_page_header'));
  ReactDOM.render(React.createElement(HealthDisability, null), document.getElementById('react_container'));
  ReactDOM.render(React.createElement(Footer, null), document.getElementById('mb_footer'));
  return render();
};

renderEmploymentStatusByCountry = function() {
  var EconByCountry, Nav, PageHeader, render;
  render = require('./redux/renderers/econ-activity-country.js');
  PageHeader = require('./partials/page-header.js');
  Nav = require('./partials/nav.js');
  EconByCountry = require('./ui/labour/static-components/econ-activity-country.js');
  ReactDOM.render(React.createElement(Nav, {
    "active": _path,
    "border": 'yes'
  }), document.getElementById('react_nav_container'));
  ReactDOM.render(React.createElement(PageHeader, {
    "page_header": "Employment status by country of birth - Census"
  }), document.getElementById('mb_page_header'));
  ReactDOM.render(React.createElement(EconByCountry, null), document.getElementById('react_container'));
  ReactDOM.render(React.createElement(Footer, null), document.getElementById('mb_footer'));
  return render();
};

switch (raw_path) {
  case '/demographics':
    renderDemographics();
    break;
  case '/health':
    renderHealth();
    break;
  case '/labour':
    renderLabour();
    break;
  case '/census/population-pyramid':
    renderPopulationPyramid();
    break;
  case '/census/ethnic-diversity':
    renderEthnicDiversity();
    break;
  case '/census/religious-diversity':
    renderReligiousDiversity();
    break;
  case '/census/ethnic-disparities-general-health':
    renderEthnicGenHealth();
    break;
  case '/census/longterm-illness-disability-by-ethnicity':
    renderHealthDisability();
    break;
  case '/census/employment-status-by-country-of-birth':
    renderEmploymentStatusByCountry();
}

$(function() {
  return $('[data-toggle="tooltip"]').tooltip();
});

//# sourceMappingURL=ui.map
