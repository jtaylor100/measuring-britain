// Generated by CoffeeScript 1.10.0
var GenHealthChart, Provider, ReduxThunk, applyMiddleware, createStore, mbReducer, ref, render, store, unsubscribe;

ref = require('redux'), createStore = ref.createStore, applyMiddleware = ref.applyMiddleware;

Provider = require('react-redux').Provider;

ReduxThunk = require('redux-thunk')["default"];

mbReducer = require('./reducers/health-reducers.js');

GenHealthChart = require('./containers/health/general-health-containers.js').GenHealthChart;

store = createStore(mbReducer, applyMiddleware(ReduxThunk));

console.log('getState 1');

console.log(store.getState());

unsubscribe = store.subscribe(function() {
  console.log('getState 2');
  return console.log(store.getState());
});

render = function() {
  return ReactDOM.render(React.createElement(Provider, {
    "store": store
  }, React.createElement(GenHealthChart, null)), document.getElementById('general-health-component'));
};

module.exports = render;

//# sourceMappingURL=health.map
