// Generated by CoffeeScript 1.10.0
var ReligionBars, ReligionBarsComponent, connect, controlsClosed, controlsOpened, districtSearch, fetchReligionData, initBars, initBarsOff, initDone, mapDispatchToProps, mapStateToProps, mouseOver, ref, requestReligionData, toggleCategory, toggleValue;

connect = require('react-redux').connect;

ref = require('../../actions/demographics/religion-bars-actions.js'), mouseOver = ref.mouseOver, toggleCategory = ref.toggleCategory, toggleValue = ref.toggleValue, requestReligionData = ref.requestReligionData, fetchReligionData = ref.fetchReligionData, controlsOpened = ref.controlsOpened, controlsClosed = ref.controlsClosed, districtSearch = ref.districtSearch, initBars = ref.initBars, initBarsOff = ref.initBarsOff, initDone = ref.initDone;

ReligionBarsComponent = require('../../../ui/demographics/religion-bars-component.js');

mapStateToProps = function(state) {
  return {
    chartName: state.relBarChart.chartName,
    _category: state.relBarChart._category,
    _value: state.relBarChart._value,
    data: state.relBarChart.data,
    isFetching: state.relBarChart.isFetching,
    activeCategory: state.relBarChart.activeCategory,
    activeValue: state.relBarChart.activeValue,
    error: state.relBarChart.error,
    updateRelBars: state.relBarChart.updateRelBars,
    isDefault: state.relBarChart.isDefault,
    isControlsOpen: state.relBarChart.isControlsOpen,
    district_query: state.relBarChart.district_query,
    init_bars: state.relBarChart.init_bars,
    init_done: state.relBarChart.init_done
  };
};

mapDispatchToProps = function(dispatch) {
  return {
    onCategoryChange: function(category) {
      return dispatch(toggleCategory(category));
    },
    onValueChange: function(value) {
      return dispatch(toggleValue(value));
    },
    onControlsOpen: function() {
      return dispatch(controlsOpened());
    },
    onControlsClosed: function() {
      return dispatch(controlsClosed());
    },
    fetchReligionData: function(filterOptions) {
      return dispatch(fetchReligionData(filterOptions));
    },
    onMouseOver: function(mouseOverData) {
      return dispatch(mouseOver(mouseOverData));
    },
    onDistrictSearch: function(query) {
      return dispatch(districtSearch(query));
    },
    onInitBars: function() {
      return dispatch(initBars());
    },
    offInitBars: function() {
      return dispatch(initBarsOff());
    },
    onInitDone: function() {
      return dispatch(initDone());
    }
  };
};

ReligionBars = connect(mapStateToProps, mapDispatchToProps)(ReligionBarsComponent);

module.exports = {
  ReligionBars: ReligionBars
};

//# sourceMappingURL=religion-bars-containers.map
