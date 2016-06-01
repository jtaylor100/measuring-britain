// Generated by CoffeeScript 1.10.0
var GenHealthChart, GenHealthChartComponent, connect, controlsClosed, controlsOpened, districtSearch, fetchGenHealthData, initDone, initGenHealth, initGenHealthOff, mapDispatchToProps, mapStateToProps, mouseOver, ref, requestGenHealthData, toggleCategory, toggleValue;

connect = require('react-redux').connect;

ref = require('../../actions/health/general-health-actions.js'), mouseOver = ref.mouseOver, toggleCategory = ref.toggleCategory, toggleValue = ref.toggleValue, requestGenHealthData = ref.requestGenHealthData, fetchGenHealthData = ref.fetchGenHealthData, controlsOpened = ref.controlsOpened, controlsClosed = ref.controlsClosed, districtSearch = ref.districtSearch, initGenHealth = ref.initGenHealth, initGenHealthOff = ref.initGenHealthOff, initDone = ref.initDone;

GenHealthChartComponent = require('../../../ui/health/general-health-component.js');

mapStateToProps = function(state) {
  return {
    chartName: state.genHealthChart.chartName,
    _category: state.genHealthChart._category,
    _value: state.genHealthChart._value,
    data: state.genHealthChart.data,
    isFetching: state.genHealthChart.isFetching,
    activeCategory: state.genHealthChart.activeCategory,
    activeValue: state.genHealthChart.activeValue,
    error: state.genHealthChart.error,
    updateGenHealth: state.genHealthChart.updateGenHealth,
    isDefault: state.genHealthChart.isDefault,
    isControlsOpen: state.genHealthChart.isControlsOpen,
    district_query: state.genHealthChart.district_query,
    init_gen_health: state.genHealthChart.init_gen_health,
    init_done: state.genHealthChart.init_done
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
    fetchGenHealthData: function(filterOptions) {
      return dispatch(fetchGenHealthData(filterOptions));
    },
    onMouseOver: function(mouseOverData) {
      return dispatch(mouseOver(mouseOverData));
    },
    onDistrictSearch: function(query) {
      return dispatch(districtSearch(query));
    },
    onInitGenHealth: function() {
      return dispatch(initGenHealth());
    },
    offInitGenHealth: function() {
      return dispatch(initGenHealthOff());
    },
    onInitDone: function() {
      return dispatch(initDone());
    }
  };
};

GenHealthChart = connect(mapStateToProps, mapDispatchToProps)(GenHealthChartComponent);

module.exports = {
  GenHealthChart: GenHealthChart
};

//# sourceMappingURL=general-health-containers.map
