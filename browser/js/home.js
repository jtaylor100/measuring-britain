// Generated by CoffeeScript 1.10.0
var $, About, CensusIntro, Footer, Nav, NewsletterSignup, PageHeader, React, ReactDOM, ThumbnailsComponent, bootstrap, demographics, health, labour, path, ref, renderAbout, renderCensusHome;

React = require('react');

ReactDOM = require('react-dom');

$ = require('jquery');

bootstrap = require('../../bootstrap-sass/javascripts/bootstrap.min.js');

Nav = require('./partials/nav.js');

ThumbnailsComponent = require('./home/thumbnails-component.js');

CensusIntro = require('./home/census-intro.js');

PageHeader = require('./partials/page-header.js');

Footer = require('./partials/footer.js');

ref = require('./page-data/census-home/thumbnails.js'), demographics = ref.demographics, health = ref.health, labour = ref.labour;

About = require('./about/about.js');

NewsletterSignup = require('./partials/newsletter-signup.js');

path = location.pathname.split('/')[1];

renderCensusHome = function() {
  ReactDOM.render(React.createElement(Nav, {
    "active": path,
    "border": "yes"
  }), document.getElementById('react_nav_container'));
  ReactDOM.render(React.createElement(PageHeader, {
    "page_header": path
  }), document.getElementById('mb_page_header'));
  ReactDOM.render(React.createElement(CensusIntro, null), document.getElementById('census_intro_row'));
  ReactDOM.render(React.createElement(ThumbnailsComponent, {
    "section": "Demographics",
    "data": demographics
  }), document.getElementById('demographics_row'));
  ReactDOM.render(React.createElement(ThumbnailsComponent, {
    "section": "Health",
    "data": health
  }), document.getElementById('health_row'));
  ReactDOM.render(React.createElement(ThumbnailsComponent, {
    "section": "Labour Market",
    "data": labour
  }), document.getElementById('labour_row'));
  return ReactDOM.render(React.createElement(Footer, null), document.getElementById('mb_footer'));
};

renderAbout = function() {
  ReactDOM.render(React.createElement(Nav, {
    "active": path,
    "border": "yes"
  }), document.getElementById('react_nav_container'));
  ReactDOM.render(React.createElement(PageHeader, {
    "page_header": "About"
  }), document.getElementById('mb_page_header'));
  ReactDOM.render(React.createElement(About, null), document.getElementById('about-container'));
  return ReactDOM.render(React.createElement(Footer, null), document.getElementById('mb_footer'));
};

switch (path) {
  case 'census':
    renderCensusHome();
    break;
  case 'about':
    renderAbout();
}

$(function() {
  return $('#mb_mc_signupform').css('visibility', 'visible');
});
