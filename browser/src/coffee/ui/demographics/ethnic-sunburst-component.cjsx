React = require 'react'
ControlsNew = require '../chart-controls-new.js'
data = require './data/pyramid-chart-controls.js'
drawSunburst = require './d3/sunburst-partition.js'
$ = require 'jQuery'

value_options = {
  districts: data.districts
  ethnicities: data.ethnic_groups
  religions: data.religions
  regions: data.regions
  countries: data.countries
}

category_options = data.category_options

SunburstComponent = React.createClass 

  componentWillMount: ->

    @props.fetchSunburstData null

  componentDidMount: ->

    if @props.isDefault is yes and @props.init_done is no
      # Only load sunburst once user scrolls to it
      $(window).on 'scroll', () =>

        docScrollTop = $(document).scrollTop()
        sunburstOffsetTop = ($('.sunburst').offset().top - 75)
        docHeight = $(document).height()

        if (docHeight - docScrollTop) < sunburstOffsetTop
          console.log 'scroll reach'
          $(window).off 'scroll'
          # @props.onInitSunburst()
          @reactDrawSunburst()
          # @props.offInitSunburst()

  reactDrawSunburst: ->

    sunburst = drawSunburst {
      container: @refs.sunburstSvg
      data: @props.data
      isDefault: @props.isDefault
      onMouseOver: @props.onMouseOver
      activeCategory: @props.activeCategory
      activeValue: @props.activeValue
      onInitDone: @props.onInitDone
    }

    # sunburst()

    if @props.isDefault is yes and @props.updateSunburst is yes

      sunburst.init()

    else

      sunburst.update()

  componentDidUpdate: ->

    if @props.updateSunburst is yes and @props.init_done is yes

      @reactDrawSunburst()

  render: ->

    <div className="col-xs-12 col-sm-8 mb-no-padding">
      <div className="sunburst mt-medium">
        <ControlsNew {...@props} omitted_category="ethnicities" categories=category_options values=value_options />
        <svg
          className="sunburst-svg"  
          style={{ width: '100%', height: '550px' }}
          ref="sunburstSvg"
        >
          <g className="main-group"></g>
          <g className="center-text-group"></g>  
          <g className="total-value-group"></g>   
        </svg>
      </div>
    </div>

module.exports = SunburstComponent