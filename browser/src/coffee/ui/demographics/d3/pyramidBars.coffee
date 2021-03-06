d3 = require 'd3'
$ = require 'jquery'

drawPyrBars = (options) ->

	{ container, age, females, males, initial, isDefault, activeBarsValue, resize } = options

	width = $(container).width() ? 358
	height = $(container).height() ? 275

	dataArr = [{
		sex: 'female'
		value: females
	}, {
		sex: 'male'
		value: males
	}]

	format = d3.format '.3s'

	# Set margins
	margin = 
		top: 60
		right: 0
		bottom: 30
		left: 0.375 * width

	# Set width & height for bars
	bars_height = height - margin.bottom - margin.top
	bars_width = width - margin.left

	# Scales and axes
	x = d3.scale.ordinal()
		.rangeRoundBands [0, bars_width], 0.4

	y = d3.scale.linear()
		.range [bars_height, 0]

	xAxis = d3.svg.axis()
		.scale x
		.orient 'bottom'

	# Set domains for axes
	x.domain ['male', 'female']
	y.domain [0, d3.max dataArr, (d) ->
		return d.value
	]

	category_value = if activeBarsValue is 'default' then 'England \& Wales' else activeBarsValue

	my = ->

		# Catch and handle resize immediately
		if resize is yes
			
			return resizePyramidBars()

		# generate chart here, using the options
		if initial is yes and isDefault is yes

			init()

		else unless initial? and isDefault is no

			update()

	init = ->

		# Create svg and g vars
		svg = d3.select '.pyramid-bars-svg'
		main_group = svg.select '.main-group'
		labelsGroup = svg.select '.labels-group'
		agesGroup = svg.select '.ages-group'
		xAxisGroup = svg.select '.x.axis'
		
		# Transforms
		main_group.attr 'transform', "translate(#{ margin.left }, #{ margin.top })"
		labelsGroup.attr 'transform', "translate(#{ margin.left + x.rangeBand() / 2 }, #{ margin.top - 15 })"
		xAxisGroup.attr "transform", "translate(#{ margin.left }, #{ height - margin.bottom })"
		agesGroup.attr "transform", "translate(20, #{ height / 2 - 30 })"

		# Bars
		main_group.selectAll '.bar'
			.data dataArr
		  .enter().append('rect')
		  	.attr {
		  		class: (d) ->
		  			if d.sex is 'female' then 'bar female' else 'bar male'
		  		x: (d) ->
		  			x d.sex
		  		y: y 0
		  		height: bars_height - y 0
		  		ry: 3
		  		width: x.rangeBand()
		  	}
		  	.transition()
		  	.duration 1500
		  	.attr {
		  		y: (d) ->
		  			return y d.value
		  		height: (d) ->
		  			return bars_height - y d.value
		  	}

		# Age label
		agesGroup.append 'text'
			.text category_value
			.style 'text-anchor', 'middle'
			.style 'font-weight', 'bold'
			.attr 'x', margin.left / 2
			.attr 'class', 'category-value-label mb-pyr-label'

		agesGroup.append 'text'
			.text 'Ages'
			.style 'text-anchor', 'middle'
			.attr 'x', margin.left / 2
			.attr 'y', 30
			.attr 'class', 'mb-pyr-label'

		agesGroup.append 'text'
			.text age
			.style 'text-anchor', 'middle'
			.style 'font-weight', 'bold'
			.attr {
				x: margin.left / 2
				y: 70
				class: 'age-band-label mb-pyr-label'
			} 

		# Number labels
		labelsGroup.append 'text'
			.text format males
			.style 'text-anchor', 'middle'
			.attr 'x', x 'male'
			.attr 'class', 'male-number'

		labelsGroup.append 'text'
			.text format females
			.style 'text-anchor', 'middle'
			.attr 'x', x 'female'
			.attr 'class', 'female-number'

		xAxisGroup.call xAxis

	update = ->

		svg = d3.select '.pyramid-bars-svg'
		main_group = svg.select '.main-group'
		maleVal = svg.select '.male-number'
		femaleVal = svg.select '.female-number'
		ageBand = svg.select '.age-band-label'
		categoryValue = svg.select '.category-value-label'

		# Update bars
		main_group.selectAll '.bar'
			.data dataArr
			.transition()
			.duration 250
		  	.attr {
		  		y: (d) ->
		  			return y d.value
		  		height: (d) ->
		  			return bars_height - y d.value
		  	}

		# Update number labels
		maleVal.text format males
		femaleVal.text format females

		# Update age band and category label
		ageBand.text age
		categoryValue.text category_value

	resizePyramidBars = ->

		# Create svg and g vars
		svg = d3.select '.pyramid-bars-svg'
		main_group = svg.select '.main-group'
		labelsGroup = svg.select '.labels-group'
		agesGroup = svg.select '.ages-group'
		xAxisGroup = svg.select '.x.axis'
		
		# Transforms
		main_group.attr 'transform', "translate(#{ margin.left }, #{ margin.top })"
		labelsGroup.attr 'transform', "translate(#{ margin.left + x.rangeBand() / 2 }, #{ margin.top - 15 })"
		xAxisGroup.attr "transform", "translate(#{ margin.left }, #{ height - margin.bottom })"
		agesGroup.attr "transform", "translate(20, #{ height / 2 - 30 })"		

		# Bars
		main_group.selectAll '.bar'
			.data dataArr
		  .enter().append('rect')
		  	.attr {
		  		x: (d) ->
		  			x d.sex
		  		# height: bars_height - y 0
		  		ry: 3
		  		width: x.rangeBand()
		  		y: (d) ->
		  			return y d.value
		  		height: (d) ->
		  			return bars_height - y d.value
		  	}

		xAxisGroup.call xAxis

	my.width = (value) ->
		unless arguments.length then return width
		width = value
		my

	my.height = (value) ->
		unless arguments.length then return height
		height = value
		my

	return my

module.exports = drawPyrBars