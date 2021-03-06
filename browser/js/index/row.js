// Generated by CoffeeScript 1.10.0
var React, Row, ThumbnailsRowComponent, thumbnailsData;

ThumbnailsRowComponent = require('../partials/thumbnails-row.js');

thumbnailsData = require('../page-data/index/featured-thumbnails.js');

React = require('react');

Row = function() {
  return React.createElement("div", {
    "className": "container mb-white-text mb-roboto mb-no-pointer-events"
  }, React.createElement("div", {
    "className": "col-xs-12 mt-zero"
  }, React.createElement(ThumbnailsRowComponent, {
    "data": thumbnailsData
  })));
};

module.exports = Row;
