React = require 'react'
ReactDOM = require 'react-dom'
voronoi = require './voronoi.js'
bootstrap = require '../../bootstrap-sass/javascripts/bootstrap.min.js'
Nav = require './partials/nav.js'
Jumbotron = require './index/jumbotron.js'
Row = require './index/row.js'
NomisAttr = require './partials/nomis-attribution.js'

# Establish what page this is
path = location.pathname.split('/')[1]

# Render presentational (stateless) components manually
ReactDOM.render <Nav active='home' border="yes"/>, document.getElementById 'react_nav_container'
ReactDOM.render <Jumbotron/>, document.getElementById 'mb_hero'
ReactDOM.render <Row/>, document.getElementById 'mb_row'
ReactDOM.render <NomisAttr/>, document.getElementById 'mb_footer'

# Run d3 voronoi splash js
voronoi()