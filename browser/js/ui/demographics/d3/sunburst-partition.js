// Generated by CoffeeScript 1.10.0
var d3, drawSunburst;

d3 = require('d3');

drawSunburst = function(options) {
  var activeCategory, activeValue, arc, arcTween, colour, container, data, format, getColour, getSubColour, height, initTween, isDefault, margin, my, nested_data_init, onInitDone, onMouseOver, partition, radius, ref, ref1, stash, total_item, width;
  container = options.container, data = options.data, isDefault = options.isDefault, onMouseOver = options.onMouseOver, activeCategory = options.activeCategory, activeValue = options.activeValue, onInitDone = options.onInitDone;
  window.nested_data = data.d3_nested_data;
  total_item = data.total_item;
  nested_data_init = {
    name: "ethnic_diversity",
    children: []
  };
  getColour = function(name) {
    switch (name) {
      case 'White':
        return '#FFCFA2';
      case 'Black':
        return '#695D5D';
      case 'Asian':
        return '#C55039';
      case 'Mixed':
        return '#ff7f0e';
      case 'Other':
        return '#DADADA';
    }
  };
  getSubColour = function(name) {
    switch (name) {
      case 'White':
        return '#FFDBB9';
      case 'Black':
        return '#887A7A';
      case 'Asian':
        return '#E2735D';
      case 'Mixed':
        return '#FFA352';
      case 'Other':
        return '#DADADA';
    }
  };
  width = (ref = container.offsetWidth) != null ? ref : 750;
  height = (ref1 = container.offsetHeight) != null ? ref1 : 500;
  margin = {
    top: 25,
    right: 0,
    bottom: 25,
    left: 0,
    middle: 0,
    text: 50
  };
  radius = Math.min(width, (height - margin.bottom - margin.top) / 2);
  colour = d3.scale.category10();
  format = d3.format('.3s');
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
  arcTween = function(d) {
    var i;
    i = d3.interpolate({
      x: this.x0,
      dx: this.dx0
    }, d);
    return (function(_this) {
      return function(t) {
        var b;
        b = i(t);
        _this.x0 = b.x;
        _this.dx0 = b.dx;
        return arc(b);
      };
    })(this);
  };
  initTween = function(d) {
    var i;
    i = d3.interpolate({
      x: 0,
      dx: 0
    }, d);
    return (function(_this) {
      return function(t) {
        var b;
        b = i(t);
        return arc(b);
      };
    })(this);
  };
  stash = function(d) {
    this.x0 = d.x;
    this.dx0 = d.dx;
  };
  my = {};
  my.init = function() {
    var center_group, center_total_value_group, main_group, paths, svg;
    svg = d3.select('.sunburst-svg');
    main_group = svg.select('.main-group');
    center_group = svg.select('.center-text-group');
    center_total_value_group = svg.select('.total-value-group');
    main_group.attr('transform', "translate(" + (width / 2) + ", " + (height * 0.52) + ")");
    center_group.attr('transform', "translate(" + (width / 2) + ", " + (height / 2) + ")");
    center_total_value_group.attr('transform', "translate(" + (width / 2) + ", " + ((height / 2) + margin.text) + ")");
    paths = main_group.selectAll('path').data(partition.nodes(nested_data)).enter().append('path').attr({
      display: function(d) {
        if (d.depth) {
          return null;
        } else {
          return 'none';
        }
      },
      "class": "sunburst-path"
    }).style('stroke', '#fff').style('fill', function(d) {
      if (d.depth === 1) {
        return getColour((d.children ? d : d.parent).name);
      } else {
        return getSubColour((d.children ? d : d.parent).name);
      }
    }).style('fill-rule', 'evenodd').transition().duration(1500).attrTween('d', initTween).each(stash);
    center_group.append('text').attr('opacity', 0).text(activeValue).attr('text-anchor', 'middle').attr('class', 'active-value-text').transition().duration(1500).attr('opacity', 1);
    center_total_value_group.append('text').attr('opacity', 0).text(format(total_item.obs_value.value)).attr('text-anchor', 'middle').attr('class', 'total-value-text').transition().duration(1500).attr('opacity', 1);
    d3.selectAll('.sunburst-path').on('mouseover', function(d) {
      var _d;
      onMouseOver({
        label: d.name,
        value: d.value
      });
      _d = d;
      return d3.selectAll('.sunburst-path').attr('opacity', function(d) {
        if (_d !== d) {
          return 0.3;
        }
      });
    }).on('mouseout', function(d) {
      return d3.selectAll('.sunburst-path').attr('opacity', 1);
    });
    return onInitDone();
  };
  my.update = function() {
    var center_value_text, main_group, newSegments, svg, total_value_text;
    svg = d3.select('.sunburst-svg');
    main_group = svg.select('.main-group');
    center_value_text = svg.select('.active-value-text');
    total_value_text = svg.select('.total-value-text');
    center_value_text.transition().duration(500).attr('opacity', 0).transition().duration(1000).text(activeValue).attr('opacity', 1);
    total_value_text.transition().duration(500).attr('opacity', 0).transition().duration(1000).text(format(total_item.obs_value.value)).attr('opacity', 1);
    newSegments = main_group.selectAll('path.sunburst-path').data(partition.nodes(nested_data)).transition().duration(1500).attrTween('d', arcTween);
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
