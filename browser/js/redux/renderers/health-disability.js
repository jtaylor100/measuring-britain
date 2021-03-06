// Generated by CoffeeScript 1.10.0
var DisabilityChart, Provider, React, ReactDOM, ReduxThunk, applyMiddleware, compose, createStore, mbReducer, ref, render, store, unsubscribe;

ReactDOM = require('react-dom');

React = require('react');

ref = require('redux'), createStore = ref.createStore, applyMiddleware = ref.applyMiddleware, compose = ref.compose;

Provider = require('react-redux').Provider;

ReduxThunk = require('redux-thunk')["default"];

mbReducer = require('../reducers/health-reducers.js');

DisabilityChart = require('../containers/health/health-disability-containers.js').DisabilityChart;

store = createStore(mbReducer, compose(applyMiddleware(ReduxThunk)));

unsubscribe = store.subscribe(function() {});

render = function() {
  return ReactDOM.render(React.createElement(Provider, {
    "store": store
  }, React.createElement(DisabilityChart, null)), document.getElementById('health-disability-component'));
};

module.exports = render;
