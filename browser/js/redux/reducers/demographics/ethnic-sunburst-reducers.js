// Generated by CoffeeScript 1.10.0
var CONTROLS_CLOSED, CONTROLS_OPENED, DISTRICT_SEARCH, ERROR_RECEIVE_ETHNIC_DATA, FILTER_USED, MOUSE_OVER, RECEIVE_ETHNIC_DATA, REQUEST_ETHNIC_DATA, TOGGLE_CATEGORY, TOGGLE_VALUE, objectAssign, ref, sunburstChart, sunburstInitialState;

objectAssign = require('object-assign');

ref = require('../../actions/demographics/ethnic-sunburst-actions.js'), REQUEST_ETHNIC_DATA = ref.REQUEST_ETHNIC_DATA, RECEIVE_ETHNIC_DATA = ref.RECEIVE_ETHNIC_DATA, TOGGLE_CATEGORY = ref.TOGGLE_CATEGORY, MOUSE_OVER = ref.MOUSE_OVER, TOGGLE_VALUE = ref.TOGGLE_VALUE, ERROR_RECEIVE_ETHNIC_DATA = ref.ERROR_RECEIVE_ETHNIC_DATA, FILTER_USED = ref.FILTER_USED, CONTROLS_OPENED = ref.CONTROLS_OPENED, CONTROLS_CLOSED = ref.CONTROLS_CLOSED, DISTRICT_SEARCH = ref.DISTRICT_SEARCH;

sunburstInitialState = {
  chartName: 'sunburst',
  isFetching: false,
  isDefault: true,
  isControlsOpen: false,
  _category: {
    value: 'countries',
    label: 'Geography (Countries)'
  },
  _value: {
    value: 'K04000001',
    label: 'England \& Wales'
  },
  activeCategory: 'Geography (Countries)',
  activeValue: 'England \& Wales',
  data: {},
  error: false,
  updateTable: false,
  updateSunburst: false,
  district_query: 'default',
  _mouseOverData: {}
};

sunburstChart = function(state, action) {
  if (state == null) {
    state = sunburstInitialState;
  }
  switch (action.type) {
    case TOGGLE_CATEGORY:
      return objectAssign({}, state, {
        _category: action.category,
        updateSunburst: false
      });
    case TOGGLE_VALUE:
      return objectAssign({}, state, {
        _value: action.value,
        updateSunburst: false
      });
    case CONTROLS_OPENED:
      return objectAssign({}, state, {
        isControlsOpen: true,
        updateSunburst: false
      });
    case CONTROLS_CLOSED:
      return objectAssign({}, state, {
        isControlsOpen: false,
        updateSunburst: false
      });
    case DISTRICT_SEARCH:
      return objectAssign({}, state, {
        district_query: action.query,
        updateSunburst: false
      });
    case FILTER_USED:
      return objectAssign({}, state, {
        isDefault: false,
        updateSunburst: false
      });
    case REQUEST_ETHNIC_DATA:
      return objectAssign({}, state, {
        isFetching: true,
        updateSunburst: false
      });
    case RECEIVE_ETHNIC_DATA:
      return objectAssign({}, state, {
        isFetching: false,
        data: action.data,
        activeCategory: state._category.label,
        activeValue: state._value.label,
        updateSunburst: true
      });
    case ERROR_RECEIVE_ETHNIC_DATA:
      return objectAssign({}, state, {
        isFetching: false,
        error: true,
        errorMessage: action.error
      });
    case MOUSE_OVER:
      return objectAssign({}, state, {
        updateSunburst: false,
        _mouseOverData: action.mouseOverData
      });
    default:
      return state;
  }
};

module.exports = sunburstChart;
