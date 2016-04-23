// Generated by CoffeeScript 1.10.0
var d3, drawSunburst;

d3 = require('d3');

drawSunburst = function(options) {
  var arc, arcTween, colour, container, data, height, init, isDefault, margin, my, nested_data, partition, radius, ref, ref1, stash, total_item, update, width;
  container = options.container, data = options.data, isDefault = options.isDefault;
  nested_data = data.d3_nested_data;
  total_item = data.total_item;
  width = (ref = container.offsetWidth) != null ? ref : 750;
  height = (ref1 = container.offsetHeight) != null ? ref1 : 500;
  margin = {
    top: 25,
    right: 0,
    bottom: 25,
    left: 0,
    middle: 0
  };
  radius = Math.min(width, (height - margin.bottom - margin.top) / 2);
  colour = d3.scale.category20c();
  partition = d3.layout.partition().sort(null).size([2 * Math.PI, radius * radius]).value(function(d) {
    return d.size;
  });
  arc = d3.svg.arc().startAngle(function(d) {
    return d.x;
  }).endAngle(function(d) {
    return d.x + d.dx;
  }).innerRadius(function(d) {
    return Math.sqrt(d.y);
  }).outerRadius(function(d) {
    return Math.sqrt(d.y + d.dy);
  });
  arcTween = function(current_datum) {
    var interpolate;
    interpolate = d3.interpolate({
      x: current_datum.x0,
      dx: current_datum.dx0
    }, current_datum);
    return function(t) {
      var b;
      b = interpolate(t);
      current_datum.x0 = b.x;
      current_datum.dx0 = b.dx;
      return arc(b);
    };
  };
  stash = function(d) {
    d.x0 = d.x;
    return d.dx0 = d.dx;
  };
  my = function() {
    if (isDefault === true) {
      return init();
    } else if (isDefault === false) {
      return update();
    }
  };
  init = function() {
    var main_group, paths, svg;
    svg = d3.select('.sunburst-svg');
    main_group = svg.select('.main-group');
    main_group.attr('transform', "translate(" + (width / 2) + ", " + (height * 0.52) + ")");
    paths = main_group.datum(nested_data).selectAll('path').data(partition.nodes).enter().append('path').attr({
      display: function(d) {
        if (d.depth) {
          return null;
        } else {
          return 'none';
        }
      },
      d: arc,
      "class": 'sunburst-path'
    }).style('stroke', '#fff').style('fill', function(d) {
      return colour((d.children ? d : d.parent).name);
    }).style('fill-rule', 'evenodd').each(stash);
    return d3.selectAll('.sunburst-path').on('mouseover', function(d) {
      console.log('mouseover d');
      return console.log(d);
    });
  };
  update = function() {
    var main_group, newSegments, svg;
    svg = d3.select('.sunburst-svg');
    main_group = svg.select('.main-group');
    newSegments = main_group.datum(nested_data).selectAll('path').data(partition.nodes);
    newSegments.transition().duration(1500).attrTween('d', arcTween).each(stash);
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

module.exports = drawSunburst;

//# sourceMappingURL=sunburst-partition.map
