// Generated by CoffeeScript 1.10.0
var combineReducers, mbReducer, relBarChart;

combineReducers = require('redux').combineReducers;

relBarChart = require('../demographics/religion-bars-reducers.js');

mbReducer = combineReducers({
  relBarChart: relBarChart
});

module.exports = mbReducer;