// Generated by CoffeeScript 1.10.0
var CONTROLS_CLOSED, CONTROLS_OPENED, DISTRICT_SEARCH, ERROR_RECEIVE_ETHNIC_DATA, FILTER_USED, INIT_DONE, INIT_SUNBURST, INIT_SUNBURST_OFF, MOUSE_OVER, RECEIVE_ETHNIC_DATA, REQUEST_ETHNIC_DATA, TOGGLE_CATEGORY, TOGGLE_VALUE, controlsClosed, controlsOpened, districtSearch, errorReceivingeEthnicData, fetchSunburstData, filterUsed, initDone, initSunburst, initSunburstOff, mouseOver, receiveEthnicData, requestEthnicData, sunBurstService, sunburstDataParser, toggleCategory, toggleValue;

sunBurstService = require('../../../services/nomis/demographics/ethnic-sunburst-service.js');

sunburstDataParser = require('../../../services/nomis/demographics/ethnic-sunburst-parser.js');

REQUEST_ETHNIC_DATA = "REQUEST_ETHNIC_DATA";

RECEIVE_ETHNIC_DATA = "RECEIVE_ETHNIC_DATA";

TOGGLE_CATEGORY = "S_TOGGLE_CATEGORY";

MOUSE_OVER = "S_MOUSE_OVER";

TOGGLE_VALUE = "S_TOGGLE_VALUE";

ERROR_RECEIVE_ETHNIC_DATA = "ERROR_RECEIVE_ETHNIC_DATA";

FILTER_USED = "S_FILTER_USED";

CONTROLS_OPENED = "S_CONTROLS_OPENED";

CONTROLS_CLOSED = "S_CONTROLS_CLOSED";

DISTRICT_SEARCH = "S_DISTRICT_SEARCH";

INIT_SUNBURST = "INIT_SUNBURST";

INIT_SUNBURST_OFF = "INIT_SUNBURST_OFF";

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

initSunburst = function() {
  return {
    type: INIT_SUNBURST
  };
};

initSunburstOff = function() {
  return {
    type: INIT_SUNBURST_OFF
  };
};

initDone = function() {
  return {
    type: INIT_DONE
  };
};

requestEthnicData = function(filterOptions) {
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

receiveEthnicData = function(data) {
  return {
    type: RECEIVE_ETHNIC_DATA,
    data: data,
    receivedAt: Date.now()
  };
};

errorReceivingeEthnicData = function(error) {
  return {
    type: ERROR_RECEIVE_ETHNIC_DATA,
    error: error
  };
};

fetchSunburstData = function(filterOptions) {
  return function(dispatch) {
    if (filterOptions != null) {
      dispatch(filterUsed());
    }
    dispatch(requestEthnicData(filterOptions));
    return sunBurstService(filterOptions).done(function(response) {
      var data;
      data = sunburstDataParser(response.obs);
      dispatch(receiveEthnicData(data));
    }).fail(function(jqxhr, textStatus, error) {
      dispatch(errorReceivingeEthnicData(textStatus + " : " + error));
    });
  };
};

module.exports = {
  REQUEST_ETHNIC_DATA: REQUEST_ETHNIC_DATA,
  RECEIVE_ETHNIC_DATA: RECEIVE_ETHNIC_DATA,
  TOGGLE_CATEGORY: TOGGLE_CATEGORY,
  MOUSE_OVER: MOUSE_OVER,
  TOGGLE_VALUE: TOGGLE_VALUE,
  ERROR_RECEIVE_ETHNIC_DATA: ERROR_RECEIVE_ETHNIC_DATA,
  FILTER_USED: FILTER_USED,
  CONTROLS_OPENED: CONTROLS_OPENED,
  CONTROLS_CLOSED: CONTROLS_CLOSED,
  DISTRICT_SEARCH: DISTRICT_SEARCH,
  INIT_SUNBURST: INIT_SUNBURST,
  INIT_SUNBURST_OFF: INIT_SUNBURST_OFF,
  INIT_DONE: INIT_DONE,
  initDone: initDone,
  initSunburst: initSunburst,
  initSunburstOff: initSunburstOff,
  mouseOver: mouseOver,
  fetchSunburstData: fetchSunburstData,
  districtSearch: districtSearch,
  requestEthnicData: requestEthnicData,
  receiveEthnicData: receiveEthnicData,
  toggleCategory: toggleCategory,
  toggleValue: toggleValue,
  errorReceivingeEthnicData: errorReceivingeEthnicData,
  filterUsed: filterUsed,
  controlsOpened: controlsOpened,
  controlsClosed: controlsClosed
};
