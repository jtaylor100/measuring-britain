// Generated by CoffeeScript 1.10.0
var ADD_FILTER, CONTROLS_CLOSED, CONTROLS_OPENED, DISTRICT_SEARCH, ERROR_RECEIVE_PYRAMID_DATA_BARS, ERROR_RECEIVE_PYRAMID_DATA_OUTLINE, FILTER_USED, FIRST_LINE_DRAWN, MOUSE_OVER, RECEIVE_PYRAMID_DATA_BARS, RECEIVE_PYRAMID_DATA_OUTLINE, REMOVE_FILTER, REQUEST_PYRAMID_DATA, TOGGLE_CATEGORY, TOGGLE_FILTERING_OPTION, TOGGLE_OUTLINE_CATEGORY, TOGGLE_OUTLINE_VALUE, TOGGLE_VALUE, objectAssign, pyramidChart, pyramidInitialState, ref;

objectAssign = require('object-assign');

ref = require('../../actions/demographics/pyramid-actions.js'), FILTER_USED = ref.FILTER_USED, RECEIVE_PYRAMID_DATA_BARS = ref.RECEIVE_PYRAMID_DATA_BARS, ERROR_RECEIVE_PYRAMID_DATA_BARS = ref.ERROR_RECEIVE_PYRAMID_DATA_BARS, ERROR_RECEIVE_PYRAMID_DATA_OUTLINE = ref.ERROR_RECEIVE_PYRAMID_DATA_OUTLINE, RECEIVE_PYRAMID_DATA_OUTLINE = ref.RECEIVE_PYRAMID_DATA_OUTLINE, REQUEST_PYRAMID_DATA = ref.REQUEST_PYRAMID_DATA, TOGGLE_CATEGORY = ref.TOGGLE_CATEGORY, TOGGLE_VALUE = ref.TOGGLE_VALUE, MOUSE_OVER = ref.MOUSE_OVER, CONTROLS_OPENED = ref.CONTROLS_OPENED, CONTROLS_CLOSED = ref.CONTROLS_CLOSED, DISTRICT_SEARCH = ref.DISTRICT_SEARCH, ADD_FILTER = ref.ADD_FILTER, REMOVE_FILTER = ref.REMOVE_FILTER, TOGGLE_OUTLINE_CATEGORY = ref.TOGGLE_OUTLINE_CATEGORY, TOGGLE_OUTLINE_VALUE = ref.TOGGLE_OUTLINE_VALUE, TOGGLE_FILTERING_OPTION = ref.TOGGLE_FILTERING_OPTION, FIRST_LINE_DRAWN = ref.FIRST_LINE_DRAWN;

pyramidInitialState = {
  chartName: 'pyramid',
  isFetching: false,
  isDefault: true,
  isControlsOpen: false,
  _barsCategory: {
    value: 'countries',
    label: 'Geography (Countries)'
  },
  _barsValue: {
    value: 'K04000001',
    label: 'England \& Wales'
  },
  activeBarsCategory: 'Geography (Countries)',
  activeBarsValue: 'England \& Wales',
  activeLineCategory: 'default',
  activeLineValue: 'default',
  data: {
    bars: {},
    outline: {}
  },
  _mouseOverData: {},
  outlineFilter: false,
  _outlineCategory: {
    value: 'default',
    label: 'default'
  },
  _outlineValue: {
    value: 'default',
    label: 'default'
  },
  error: false,
  updateBars: false,
  updatePyramid: false,
  updateOutline: false,
  isFirstLine: true,
  district_query: 'default',
  filteringOption: {
    option: 'bars',
    cat: '_barsCategory',
    val: '_barsValue'
  }
};

pyramidChart = function(state, action) {
  if (state == null) {
    state = pyramidInitialState;
  }
  switch (action.type) {
    case TOGGLE_CATEGORY:
      return objectAssign({}, state, {
        _barsCategory: action.category,
        updatePyramid: false,
        updateBars: false,
        updateOutline: false
      });
    case TOGGLE_VALUE:
      return objectAssign({}, state, {
        _barsValue: action.value,
        updatePyramid: false,
        updateBars: false,
        updateOutline: false
      });
    case CONTROLS_OPENED:
      return objectAssign({}, state, {
        isControlsOpen: true,
        updatePyramid: false,
        updateBars: false,
        updateOutline: false
      });
    case CONTROLS_CLOSED:
      return objectAssign({}, state, {
        isControlsOpen: false,
        updatePyramid: false,
        updateBars: false,
        updateOutline: false
      });
    case FILTER_USED:
      return objectAssign({}, state, {
        isDefault: false,
        updatePyramid: false,
        updateBars: false,
        updateOutline: false
      });
    case DISTRICT_SEARCH:
      return objectAssign({}, state, {
        district_query: action.query,
        updatePyramid: false,
        updateBars: false,
        updateOutline: false
      });
    case REQUEST_PYRAMID_DATA:
      return objectAssign({}, state, {
        isFetching: true,
        updatePyramid: false,
        updateBars: false,
        updateOutline: false
      });
    case RECEIVE_PYRAMID_DATA_BARS:
      return objectAssign({}, state, {
        isFetching: false,
        data: {
          bars: action.data,
          outline: state.data.outline
        },
        lastUpdated: action.receivedAt,
        updatePyramid: true,
        updateBars: true,
        updateOutline: false,
        activeBarsValue: state._barsValue.label,
        activeBarsCategory: state._barsCategory.label
      });
    case RECEIVE_PYRAMID_DATA_OUTLINE:
      return objectAssign({}, state, {
        isFetching: false,
        data: {
          outline: action.data,
          bars: state.data.bars
        },
        lastUpdated: action.receivedAt,
        updatePyramid: false,
        updateOutline: true,
        activeLineValue: state._outlineValue.label,
        activeLineCategory: state._outlineCategory.label
      });
    case FIRST_LINE_DRAWN:
      return objectAssign({}, state, {
        isFirstLine: false,
        updatePyramid: false,
        updateBars: false,
        updateOutline: false
      });
    case ERROR_RECEIVE_PYRAMID_DATA_BARS:
      return objectAssign({}, state, {
        isFetching: false,
        error: true,
        errorMessage: action.barsError,
        updatePyramid: false,
        updateBars: false,
        updateOutline: false
      });
    case ERROR_RECEIVE_PYRAMID_DATA_OUTLINE:
      return objectAssign({}, state, {
        isFetching: false,
        error: true,
        errorMessage: action.outlineError,
        updatePyramid: false,
        updateBars: false,
        updateOutline: false
      });
    case MOUSE_OVER:
      return objectAssign({}, state, {
        _mouseOverData: action.mouseOverData,
        updateBars: true,
        updateOutline: false
      });
    case ADD_FILTER:
      return objectAssign({}, state, {
        outlineFilter: true,
        updatePyramid: false,
        updateBars: false,
        updateOutline: false
      });
    case REMOVE_FILTER:
      return objectAssign({}, state, {
        outlineFilter: false,
        updatePyramid: false,
        updateBars: false,
        updateOutline: false
      });
    case TOGGLE_FILTERING_OPTION:
      return objectAssign({}, state, {
        filteringOption: action.filteringOption,
        updatePyramid: false,
        updateBars: false,
        updateOutline: false
      });
    case TOGGLE_OUTLINE_CATEGORY:
      return objectAssign({}, state, {
        _outlineCategory: action.category,
        updatePyramid: false,
        updateBars: false,
        updateOutline: false
      });
    case TOGGLE_OUTLINE_VALUE:
      return objectAssign({}, state, {
        _outlineValue: action.value,
        updatePyramid: false,
        updateBars: false,
        updateOutline: false
      });
    default:
      return state;
  }
};

module.exports = pyramidChart;