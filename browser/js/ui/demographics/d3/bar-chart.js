// Generated by CoffeeScript 1.10.0
var drawBarChart;

drawBarChart = function(options) {
  var activeCategory, activeValue, attachHoverHandlers, chart_height, chart_width, container, d3_array, data, format, height, isDefault, key, margin, my, onInitDone, onMouseOver, percFormat, ref, ref1, width, x, xAxis, y;
  container = options.container, data = options.data, isDefault = options.isDefault, onMouseOver = options.onMouseOver, activeCategory = options.activeCategory, activeValue = options.activeValue, onInitDone = options.onInitDone;
  my = {};
  width = (ref = $(container).width()) != null ? ref : 750;
  height = (ref1 = $(container).height()) != null ? ref1 : 500;
  margin = {
    top: 40,
    right: 40,
    bottom: 10,
    left: 70,
    p: 25
  };
  chart_width = width - margin.left - margin.right;
  chart_height = height - margin.top - margin.bottom;
  format = d3.format('.2s');
  percFormat = d3.format(',.1%');
  d3_array = data.d3_array;
  y = d3.scale.ordinal().domain(d3_array.map(function(d) {
    return d.name;
  })).rangeRoundBands([0, chart_height], 0.05);
  x = d3.scale.linear().domain([
    0, d3.max(d3_array, function(d) {
      return d.value;
    })
  ]).range([0, chart_width]);
  xAxis = d3.svg.axis().scale(x).tickSize(-chart_height - margin.bottom).tickFormat(format).ticks(10).orient('top');
  key = function(d) {
    return d.name;
  };
  my.init = function() {
    var bar, barsEnter, detail_group, detail_height, detail_width, labels_group, main_group, svg, x_axis_group;
    svg = d3.select('.bars-svg');
    main_group = svg.select('.main-group');
    labels_group = svg.select('.labels-group');
    x_axis_group = svg.select('.x.axis');
    detail_group = svg.select('.detail-group');
    main_group.attr('transform', "translate(" + margin.left + ", " + margin.top + ")");
    labels_group.attr('transform', "translate(" + (margin.left - 10) + ", " + (margin.top + 22) + ")");
    x_axis_group.attr('transform', "translate(" + margin.left + ", " + margin.top + ")");
    detail_group.attr('transform', "translate(" + ((chart_width / 3) * 2) + ", " + ((chart_height / 2) + margin.top) + ")");
    bar = main_group.selectAll('rect').data(d3_array, key);
    barsEnter = bar.enter().append('rect').attr({
      width: 0,
      height: function() {
        return y.rangeBand();
      },
      y: function(d, i) {
        return y(d.name);
      },
      x: 0,
      "class": 'bar',
      rx: 4
    }).transition().duration(1500).attr('width', function(d) {
      return x(d.value);
    });
    labels_group.selectAll('text').data(d3_array, key).enter().append('text').attr('opacity', 0).text(function(d) {
      return d.name;
    }).style('text-anchor', 'end').attr('y', function(d, i) {
      return y(d.name);
    }).attr('class', 'rel-label').transition().duration(1500).attr('opacity', 1);
    x_axis_group.transition().duration(1500).call(xAxis);
    detail_width = chart_width - ((chart_width / 3) * 2);
    detail_height = (chart_height / 2) - margin.top;
    detail_group.append('rect').attr({
      width: detail_width,
      height: detail_height,
      y: 0,
      x: 0,
      rx: 4,
      fill: '#F3F3F3'
    });
    detail_group.append('text').attr({
      x: detail_width / 2,
      y: (detail_height / 2) - margin.p,
      "class": 'detail-text-religion'
    }).text('Total');
    detail_group.append('text').attr({
      x: detail_width / 2,
      y: (detail_height / 2) + margin.p,
      "class": 'detail-text-value'
    }).text(format(data.sum));
    detail_group.append('text').attr({
      x: detail_width / 2,
      y: (detail_height / 2) + margin.p * 2,
      "class": 'detail-text-percent'
    }).text('100%');
    return attachHoverHandlers();
  };
  my.update = function() {
    var detail_text_value, labels_group_labels, main_group_bars, svg, x_axis_group;
    svg = d3.select('.bars-svg');
    main_group_bars = svg.selectAll('.main-group .bar');
    labels_group_labels = svg.selectAll('.labels-group text');
    x_axis_group = svg.select('.x.axis');
    detail_text_value = svg.select('.detail-text-value');
    main_group_bars.data(d3_array, key).transition().duration(1000).attr('width', function(d) {
      return x(d.value);
    }).attr('y', function(d, i) {
      return y(d.name);
    });
    labels_group_labels.data(d3_array, key).transition().duration(1000).attr('y', function(d, i) {
      return y(d.name);
    });
    x_axis_group.transition().duration(1000).call(xAxis);
    detail_text_value.text(format(data.sum));
    return attachHoverHandlers();
  };
  attachHoverHandlers = function() {
    var detail_text_percent, detail_text_religion, detail_text_value, main_group_bars, svg;
    svg = d3.select('.bars-svg');
    main_group_bars = svg.selectAll('.main-group .bar');
    detail_text_religion = svg.select('.detail-text-religion');
    detail_text_value = svg.select('.detail-text-value');
    detail_text_percent = svg.select('.detail-text-percent');
    return main_group_bars.on('mouseover', function(d) {
      var _d;
      _d = d;
      main_group_bars.attr('opacity', function(d) {
        if (_d !== d) {
          return 0.3;
        }
      });
      detail_text_religion.text(d.name);
      detail_text_value.text(format(d.value));
      return detail_text_percent.text(percFormat(d.value / data.sum));
    }).on('mouseout', function(d) {
      main_group_bars.attr('opacity', 1);
      detail_text_religion.text('Total');
      detail_text_value.text(format(data.sum));
      return detail_text_percent.text('100%');
    });
  };
  my.width = function(value) {
    if (!arguments.length) {
      return width;
    }
    width = value;
    return my;
  };
  my.height = function(value) {
    if (!arguments.length) {
      return height;
    }
    height = value;
    return my;
  };
  return my;
};

module.exports = drawBarChart;

//# sourceMappingURL=bar-chart.map
