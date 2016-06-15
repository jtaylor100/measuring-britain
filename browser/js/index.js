// Generated by CoffeeScript 1.10.0
var Jumbotron, Nav, Row, bootstrap, path;

window.React = require('react');

window.ReactDOM = require('react-dom');

window.d3 = require('d3');

window.$ = require('jquery');

bootstrap = require('../../bootstrap-sass/javascripts/bootstrap.min.js');

Nav = require('./partials/nav.js');

Jumbotron = require('./index/jumbotron.js');

Row = require('./index/row.js');

path = location.pathname.split('/')[1];

ReactDOM.render(React.createElement(Nav, {
  "active": 'home',
  "border": "yes"
}), document.getElementById('react_nav_container'));

ReactDOM.render(React.createElement(Jumbotron, null), document.getElementById('mb_hero_cell_bg'));

ReactDOM.render(React.createElement(Row, null), document.getElementById('mb_row'));

//# sourceMappingURL=index.map
