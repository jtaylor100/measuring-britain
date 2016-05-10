// Generated by CoffeeScript 1.10.0
var CONTROLS_CLOSED, CONTROLS_OPENED, DISTRICT_SEARCH, ERROR_RECEIVE_RELIGION_DATA, FILTER_USED, INIT_BARS, INIT_BARS_OFF, INIT_DONE, MOUSE_OVER, RECEIVE_RELIGION_DATA, REQUEST_RELIGION_DATA, TOGGLE_CATEGORY, TOGGLE_VALUE, controlsClosed, controlsOpened, districtSearch, errorReceivingeReligionData, fetchReligionData, filterUsed, initBars, initBarsOff, initDone, mouseOver, receiveReligionData, requestReligionData, toggleCategory, toggleValue;

REQUEST_RELIGION_DATA = "REQUEST_RELIGION_DATA";

RECEIVE_RELIGION_DATA = "RECEIVE_RELIGION_DATA";

TOGGLE_CATEGORY = "R_TOGGLE_CATEGORY";

MOUSE_OVER = "R_MOUSE_OVER";

TOGGLE_VALUE = "R_TOGGLE_VALUE";

ERROR_RECEIVE_RELIGION_DATA = "ERROR_RECEIVE_RELIGION_DATA";

FILTER_USED = "P_FILTER_USED";

CONTROLS_OPENED = "P_CONTROLS_OPENED";

CONTROLS_CLOSED = "P_CONTROLS_CLOSED";

DISTRICT_SEARCH = "P_DISTRICT_SEARCH";

INIT_BARS = "INIT_BARS";

INIT_BARS_OFF = "INIT_BARS_OFF";

INIT_DONE = "INIT_DONE";

toggleValue = function(value) {
  return {
    type: TOGGLE_VALUE,
    value: value
  };
};

toggleCategory = function(category) {
  return {
    type: TOGGLE_CATEGORY,
    category: category
  };
};

controlsOpened = function() {
  return {
    type: CONTROLS_OPENED,
    isControlsOpen: true
  };
};

districtSearch = function(query) {
  return {
    type: DISTRICT_SEARCH,
    query: query
  };
};

controlsClosed = function() {
  return {
    type: CONTROLS_CLOSED,
    isControlsOpen: false
  };
};

mouseOver = function(mouseOverData) {
  return {
    type: MOUSE_OVER,
    mouseOverData: mouseOverData
  };
};

initBars = function() {
  return {
    type: INIT_SUNBURST
  };
};

initBarsOff = function() {
  return {
    type: INIT_SUNBURST_OFF
  };
};

initDone = function() {
  return {
    type: INIT_DONE
  };
};

requestReligionData = function(filterOptions) {
  return {
    type: REQUEST_ETHNIC_DATA,
    filterOptions: filterOptions
  };
};

filterUsed = function() {
  return {
    type: FILTER_USED
  };
};

receiveReligionData = function(data) {
  return {
    type: RECEIVE_ETHNIC_DATA,
    data: data,
    receivedAt: Date.now()
  };
};

errorReceivingeReligionData = function(error) {
  return {
    type: ERROR_RECEIVE_ETHNIC_DATA,
    error: error
  };
};

fetchReligionData = function(filterOptions) {
  return function(dispatch) {
    if (filterOptions != null) {
      dispatch(filterUsed());
    }
    return dispatch(requestReligionData(filterOptions));
  };
};

module.exports = {
  REQUEST_RELIGION_DATA: REQUEST_RELIGION_DATA,
  RECEIVE_RELIGION_DATA: RECEIVE_RELIGION_DATA,
  TOGGLE_CATEGORY: TOGGLE_CATEGORY,
  MOUSE_OVER: MOUSE_OVER,
  TOGGLE_VALUE: TOGGLE_VALUE,
  ERROR_RECEIVE_RELIGION_DATA: ERROR_RECEIVE_RELIGION_DATA,
  FILTER_USED: FILTER_USED,
  CONTROLS_OPENED: CONTROLS_OPENED,
  CONTROLS_CLOSED: CONTROLS_CLOSED,
  DISTRICT_SEARCH: DISTRICT_SEARCH,
  INIT_BARS: INIT_BARS,
  INIT_BARS_OFF: INIT_BARS_OFF,
  INIT_DONE: INIT_DONE,
  initDone: initDone,
  initBars: initBars,
  initBarsOff: initBarsOff,
  mouseOver: mouseOver,
  fetchReligionData: fetchReligionData,
  districtSearch: districtSearch,
  requestReligionData: requestReligionData,
  receiveReligionData: receiveReligionData,
  toggleCategory: toggleCategory,
  toggleValue: toggleValue,
  errorReceivingeReligionData: errorReceivingeReligionData,
  filterUsed: filterUsed,
  controlsOpened: controlsOpened,
  controlsClosed: controlsClosed
};

//# sourceMappingURL=religion-bars-actions.map
