// Generated by CoffeeScript 1.10.0
var ADD_FILTER, CONTROLS_CLOSED, CONTROLS_OPENED, DISTRICT_SEARCH, ERROR_RECEIVE_PYRAMID_DATA_BARS, ERROR_RECEIVE_PYRAMID_DATA_OUTLINE, FILTER_USED, MOUSE_OVER, RECEIVE_PYRAMID_DATA_BARS, RECEIVE_PYRAMID_DATA_OUTLINE, REMOVE_FILTER, REQUEST_PYRAMID_DATA, TOGGLE_CATEGORY, TOGGLE_FILTERING_OPTION, TOGGLE_OUTLINE_CATEGORY, TOGGLE_OUTLINE_VALUE, TOGGLE_VALUE, addFilter, controlsClosed, controlsOpened, districtSearch, errorReceivingPyramidDataBars, errorReceivingPyramidDataOutline, fetchPyramidData, filterUsed, mouseOver, pyramidDataParser, pyramidService, receivePyramidDataBars, receivePyramidDataOutline, removeFilter, requestPyramidData, toggleCategory, toggleFilteringOption, toggleOutlineCategory, toggleOutlineValue, toggleValue;

pyramidService = require('../../../services/nomis/demographics/pyramid-service.js');

pyramidDataParser = require('../../../services/nomis/demographics/pyramid-parser.js');

REQUEST_PYRAMID_DATA = "REQUEST_PYRAMID_DATA";

RECEIVE_PYRAMID_DATA_BARS = "RECEIVE_PYRAMID_DATA_BARS";

RECEIVE_PYRAMID_DATA_OUTLINE = "RECEIVE_PYRAMID_DATA_OUTLINE";

TOGGLE_CATEGORY = "TOGGLE_CATEGORY";

MOUSE_OVER = "MOUSE_OVER";

ADD_FILTER = "ADD_FILTER";

REMOVE_FILTER = "REMOVE_FILTER";

TOGGLE_OUTLINE_CATEGORY = "TOGGLE_OUTLINE_CATEGORY";

TOGGLE_OUTLINE_VALUE = "TOGGLE_OUTLINE_VALUE";

TOGGLE_VALUE = "TOGGLE_VALUE";

ERROR_RECEIVE_PYRAMID_DATA_BARS = "ERROR_RECEIVE_PYRAMID_DATA_BARS";

ERROR_RECEIVE_PYRAMID_DATA_OUTLINE = "ERROR_RECEIVE_PYRAMID_DATA_OUTLINE";

FILTER_USED = "FILTER_USED";

CONTROLS_OPENED = "P_CONTROLS_OPENED";

CONTROLS_CLOSED = "P_CONTROLS_CLOSED";

DISTRICT_SEARCH = "P_DISTRICT_SEARCH";

TOGGLE_FILTERING_OPTION = "TOGGLE_FILTERING_OPTION";

toggleValue = function(value) {
  return {
    type: TOGGLE_VALUE,
    value: value
  };
};

controlsClosed = function() {
  return {
    type: CONTROLS_CLOSED,
    isControlsOpen: false
  };
};

controlsOpened = function() {
  return {
    type: CONTROLS_OPENED,
    isControlsOpen: true
  };
};

toggleFilteringOption = function(option) {
  return {
    type: TOGGLE_FILTERING_OPTION,
    filteringOption: option
  };
};

districtSearch = function(query) {
  return {
    type: DISTRICT_SEARCH,
    query: query
  };
};

toggleOutlineCategory = function(category) {
  return {
    type: TOGGLE_OUTLINE_CATEGORY,
    category: category
  };
};

toggleOutlineValue = function(value) {
  return {
    type: TOGGLE_OUTLINE_VALUE,
    value: value
  };
};

addFilter = function() {
  return {
    type: ADD_FILTER
  };
};

removeFilter = function() {
  return {
    type: REMOVE_FILTER
  };
};

toggleCategory = function(category) {
  return {
    type: TOGGLE_CATEGORY,
    category: category
  };
};

mouseOver = function(mouseOverData) {
  return {
    type: MOUSE_OVER,
    mouseOverData: mouseOverData
  };
};

requestPyramidData = function(filterOptions) {
  return {
    type: REQUEST_PYRAMID_DATA,
    filterOptions: filterOptions
  };
};

filterUsed = function() {
  return {
    type: FILTER_USED
  };
};

receivePyramidDataBars = function(data) {
  return {
    type: RECEIVE_PYRAMID_DATA_BARS,
    data: data,
    receivedAt: Date.now()
  };
};

receivePyramidDataOutline = function(data) {
  return {
    type: RECEIVE_PYRAMID_DATA_OUTLINE,
    data: data,
    receivedAt: Date.now()
  };
};

errorReceivingPyramidDataBars = function(error) {
  return {
    type: ERROR_RECEIVE_PYRAMID_DATA_BARS,
    barsError: error
  };
};

errorReceivingPyramidDataOutline = function(error) {
  return {
    type: ERROR_RECEIVE_PYRAMID_DATA_OUTLINE,
    outlineError: error
  };
};

fetchPyramidData = function(filterOptions) {
  var barOptions, outlineOptions, shouldFetchOutline;
  shouldFetchOutline = filterOptions != null ? filterOptions.outlineRequested : false;
  barOptions = filterOptions != null ? filterOptions.bars : null;
  outlineOptions = filterOptions != null ? filterOptions.outline : null;
  return function(dispatch) {
    if (filterOptions != null) {
      dispatch(filterUsed());
    }
    dispatch(requestPyramidData(barOptions));
    if (shouldFetchOutline === false) {
      return pyramidService(barOptions).done(function(response) {
        var data;
        data = pyramidDataParser(response.obs);
        dispatch(receivePyramidDataBars(data));
      }).fail(function(jqxhr, textStatus, error) {
        dispatch(errorReceivingPyramidDataBars(textStatus + " : " + error));
      });
    } else if (shouldFetchOutline === true) {
      pyramidService(barOptions).done(function(response) {
        var data;
        data = pyramidDataParser(response.obs);
        dispatch(receivePyramidDataBars(data));
      }).fail(function(jqxhr, textStatus, error) {
        dispatch(errorReceivingPyramidDataBars(textStatus + " : " + error));
      });
      return pyramidService(outlineOptions).done(function(response) {
        var data;
        data = pyramidDataParser(response.obs);
        dispatch(receivePyramidDataOutline(data));
      }).fail(function(jqxhr, textStatus, error) {
        dispatch(errorReceivingPyramidDataOutline(textStatus + " : " + error));
      });
    }
  };
};

module.exports = {
  RECEIVE_PYRAMID_DATA_BARS: RECEIVE_PYRAMID_DATA_BARS,
  RECEIVE_PYRAMID_DATA_OUTLINE: RECEIVE_PYRAMID_DATA_OUTLINE,
  ERROR_RECEIVE_PYRAMID_DATA_OUTLINE: ERROR_RECEIVE_PYRAMID_DATA_OUTLINE,
  ERROR_RECEIVE_PYRAMID_DATA_BARS: ERROR_RECEIVE_PYRAMID_DATA_BARS,
  REQUEST_PYRAMID_DATA: REQUEST_PYRAMID_DATA,
  TOGGLE_CATEGORY: TOGGLE_CATEGORY,
  MOUSE_OVER: MOUSE_OVER,
  ADD_FILTER: ADD_FILTER,
  REMOVE_FILTER: REMOVE_FILTER,
  TOGGLE_OUTLINE_CATEGORY: TOGGLE_OUTLINE_CATEGORY,
  TOGGLE_OUTLINE_VALUE: TOGGLE_OUTLINE_VALUE,
  TOGGLE_VALUE: TOGGLE_VALUE,
  FILTER_USED: FILTER_USED,
  CONTROLS_OPENED: CONTROLS_OPENED,
  CONTROLS_CLOSED: CONTROLS_CLOSED,
  DISTRICT_SEARCH: DISTRICT_SEARCH,
  TOGGLE_FILTERING_OPTION: TOGGLE_FILTERING_OPTION,
  toggleFilteringOption: toggleFilteringOption,
  controlsOpened: controlsOpened,
  controlsClosed: controlsClosed,
  districtSearch: districtSearch,
  filterUsed: filterUsed,
  receivePyramidDataBars: receivePyramidDataBars,
  receivePyramidDataOutline: receivePyramidDataOutline,
  requestPyramidData: requestPyramidData,
  fetchPyramidData: fetchPyramidData,
  toggleCategory: toggleCategory,
  mouseOver: mouseOver,
  addFilter: addFilter,
  removeFilter: removeFilter,
  toggleOutlineCategory: toggleOutlineCategory,
  toggleValue: toggleValue,
  toggleOutlineValue: toggleOutlineValue,
  errorReceivingPyramidDataOutline: errorReceivingPyramidDataOutline,
  errorReceivingPyramidDataBars: errorReceivingPyramidDataBars
};

//# sourceMappingURL=pyramid-actions.map
