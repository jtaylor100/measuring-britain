// Generated by CoffeeScript 1.10.0
var Provider, Pyramid, React, ReactDOM, ReduxThunk, Table, applyMiddleware, createStore, fetchPyramidData, mbReducer, mouseOver, ref, ref1, ref2, renderPyramid, requestPyramidData, store, unsubscribe;

ref = require('redux'), createStore = ref.createStore, applyMiddleware = ref.applyMiddleware;

ref1 = require('./actions/demographics-actions.js'), requestPyramidData = ref1.requestPyramidData, fetchPyramidData = ref1.fetchPyramidData, mouseOver = ref1.mouseOver;

Provider = require('react-redux').Provider;

ReduxThunk = require('redux-thunk')["default"];

ref2 = require('./containers/containers.js'), Pyramid = ref2.Pyramid, Table = ref2.Table;

mbReducer = require('./reducers/reducers.js');

ReactDOM = require('react-dom');

React = require('react');

store = createStore(mbReducer, applyMiddleware(ReduxThunk));

store.dispatch(fetchPyramidData(null));

unsubscribe = store.subscribe(function() {
  console.log('getState 2');
  return console.log(store.getState());
});

renderPyramid = function() {
  ReactDOM.render(React.createElement(Provider, {
    "store": store
  }, React.createElement(Pyramid, null)), document.getElementById('pyramid-container'));
  return ReactDOM.render(React.createElement(Provider, {
    "store": store
  }, React.createElement(Table, null)), document.getElementById('pyramid-table'));
};

module.exports = renderPyramid;

//# sourceMappingURL=index.map
