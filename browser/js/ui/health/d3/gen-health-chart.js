// Generated by CoffeeScript 1.10.0
var drawGenHealthChart;

drawGenHealthChart = function(options) {
  var activeCategory, activeValue, ages, attachHoverHandlers, chart_height, chart_width, colour, container, d3_array, data, ethnic_groups, format, height, isDefault, line, margin, max_perc, max_value, my, onInitDone, onMouseOver, percFormat, ref, ref1, width, x, xAxis, y, yAxis;
  container = options.container, data = options.data, isDefault = options.isDefault, onMouseOver = options.onMouseOver, activeCategory = options.activeCategory, activeValue = options.activeValue, onInitDone = options.onInitDone;
  my = {};
  width = (ref = $(container).width()) != null ? ref : 750;
  height = (ref1 = $(container).height()) != null ? ref1 : 500;
  margin = {
    top: 20,
    right: 80,
    bottom: 20,
    left: 45,
    p: 25
  };
  chart_width = width - margin.left - margin.right;
  chart_height = height - margin.top - margin.bottom;
  format = d3.format('.2s');
  percFormat = d3.format(',.0%');
  d3_array = data.percentages;
  ethnic_groups = data.ethnicities;
  ages = data.ages;
  max_value = data.max_value;
  max_perc = data.max_perc;
  colour = d3.scale.category20().domain(ethnic_groups);
  x = d3.scale.ordinal().domain(ages).rangePoints([0, chart_width]);
  y = d3.scale.linear().domain([0, max_perc]).range([chart_height, 0]);
  yAxis = d3.svg.axis().scale(y).tickFormat(percFormat).ticks(6).orient('left');
  xAxis = d3.svg.axis().scale(x).orient('bottom');
  line = d3.svg.line().interpolate('cardinal').x(function(d) {
    return x(d.key);
  }).y(function(d) {
    return y(d.values.bad);
  });
  my.init = function() {
    var ethnicity, main_group, svg, title_group, x_axis_group, y_axis_group;
    svg = d3.select('.gen-health-svg');
    main_group = svg.select('.main-group');
    x_axis_group = svg.select('.x.axis');
    y_axis_group = svg.select('.y.axis');
    title_group = svg.select('.title-group');
    main_group.attr('transform', "translate(" + margin.left + ", " + margin.top + ")");
    x_axis_group.attr('transform', "translate(" + margin.left + ", " + (chart_height + margin.top) + ")");
    y_axis_group.attr('transform', "translate(" + margin.left + ", " + margin.top + ")");
    title_group.attr('transform', "translate(" + (chart_width / 2 - margin.left) + ", 0)");
    x_axis_group.call(xAxis);
    y_axis_group.call(yAxis).append("text").attr("transform", "rotate(-90)").attr("y", 6).attr("dy", ".71em").style("text-anchor", "end").text("% of Population");
    ethnicity = main_group.selectAll('.ethnicity').data(d3_array).enter().append('g').attr('class', 'ethnicity');
    ethnicity.append('path').attr({
      "class": 'line',
      d: function(d) {
        return line(d.values);
      }
    }).style('stroke', function(d) {
      return colour(d.key);
    });
    ethnicity.append('text').attr({
      "class": 'label',
      transform: function(d) {
        return "translate(" + (x(d.values[d.values.length - 1].key)) + ", " + (y(d.values[d.values.length - 1].values.bad)) + ")";
      },
      x: 3,
      dy: '.35em',
      opacity: 0
    }).text(function(d) {
      var str, trimmedStr;
      if (d.key.indexOf('Gypsy') !== -1) {
        trimmedStr = 'Gypsy';
      } else if (d.key.indexOf('English') !== -1) {
        trimmedStr = 'British';
      } else {
        str = d.key;
        trimmedStr = str.substr(str.indexOf(':') + 2, str.length);
      }
      return trimmedStr;
    }).transition().duration(1750).attr('opacity', 0.1);
    main_group.append('rect').attr({
      x: 0,
      y: 0,
      width: chart_width,
      height: chart_height,
      "class": 'init-transition-rect',
      fill: '#FFF'
    }).transition().duration(1500).attr({
      width: 0,
      x: chart_width
    }).remove();
    return title_group.append('text').attr({
      x: 0,
      y: margin.p,
      opacity: 0,
      'font-size': '12px'
    }).text('Self-proclaimed bad or very bad health').transition().duration(1500).attr('opacity', 1);
  };
  my.update = function() {
    var labels, main_group_lines, svg, x_axis_group, y_axis_group;
    svg = d3.select('.gen-health-svg');
    main_group_lines = svg.selectAll('.main-group path');
    labels = svg.selectAll('.label');
    x_axis_group = svg.select('.x.axis');
    y_axis_group = svg.select('.y.axis');
    main_group_lines.data(d3_array).transition().duration(1000).delay(500).attr('d', function(d) {
      return line(d.values);
    });
    labels.data(d3_array).transition().duration(1000).delay(500).attr({
      transform: function(d) {
        return "translate(" + (x(d.values[d.values.length - 1].key)) + ", " + (y(d.values[d.values.length - 1].values.bad)) + ")";
      }
    });
    x_axis_group.transition().duration(1000).delay(500).call(xAxis);
    return y_axis_group.transition().duration(1000).delay(500).call(yAxis);
  };
  attachHoverHandlers = function() {
    var labels, main_group_lines, svg;
    svg = d3.select('.gen-health-svg');
    main_group_lines = svg.selectAll('.main-group path');
    labels = svg.selectAll('.label');
    return main_group_lines.on('mouseover', function(d) {
      var _d;
      _d = d;
      main_group_lines.attr('opacity', function(d) {
        if (_d !== d) {
          return 0.1;
        } else {
          return 1;
        }
      });
      return labels.attr('opacity', function(d) {
        if (_d !== d) {
          return 0.05;
        } else {
          return 1;
        }
      });
    }).on('mouseout', function(d) {
      main_group_lines.attr('opacity', 1);
      return labels.attr('opacity', 0.1);
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

module.exports = drawGenHealthChart;

//# sourceMappingURL=gen-health-chart.map
