// Generated by CoffeeScript 1.10.0
var EconByCountry, EconByCountryDetail, Provider, ReduxThunk, applyMiddleware, createStore, mbReducer, ref, ref1, render, store, unsubscribe;

ref = require('redux'), createStore = ref.createStore, applyMiddleware = ref.applyMiddleware;

Provider = require('react-redux').Provider;

ReduxThunk = require('redux-thunk')["default"];

ref1 = require('../containers/labour/econ-activity-country-containers.js'), EconByCountry = ref1.EconByCountry, EconByCountryDetail = ref1.EconByCountryDetail;

mbReducer = require('../reducers/mb-reducers/econ-activity-country.js');

store = createStore(mbReducer, applyMiddleware(ReduxThunk));

console.log('getState 1');

console.log(store.getState());

unsubscribe = store.subscribe(function() {
  console.log('getState 2');
  return console.log(store.getState());
});

render = function() {
  ReactDOM.render(React.createElement(Provider, {
    "store": store
  }, React.createElement(EconByCountry, null)), document.getElementById('econ-country-component'));
  return ReactDOM.render(React.createElement(Provider, {
    "store": store
  }, React.createElement(EconByCountryDetail, null)), document.getElementById('econ-country-details'));
};

module.exports = render;

//# sourceMappingURL=econ-activity-country.map
