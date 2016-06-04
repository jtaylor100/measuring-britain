// Generated by CoffeeScript 1.10.0
var GenHealthDetailComponent, format, percFormat;

format = d3.format('.3s');

percFormat = d3.format(',.2%');

GenHealthDetailComponent = React.createClass({displayName: "GenHealthDetailComponent",
  highlight: function(ethnicity) {
    return this.props.onHighlightLine(ethnicity);
  },
  unHighlight: function(ethnicity, index) {
    return this.props.onUnHighlightLine(ethnicity, index);
  },
  handleChange: function(event) {
    var $el, arr, index, value;
    $el = $(event.target);
    value = event.target.value;
    if ($el.hasClass('highlight') === true) {
      $el.removeClass('highlight');
      arr = this.props._highlights;
      index = arr.indexOf(value);
      return this.unHighlight(value, index);
    } else {
      $el.addClass('highlight');
      return this.highlight(value);
    }
  },
  trimEthnicity: function(ethnicity_string) {
    var str, trimmedStr;
    if (ethnicity_string.indexOf('Gypsy') !== -1) {
      trimmedStr = 'Gypsy';
    } else if (ethnicity_string.indexOf('English') !== -1) {
      trimmedStr = 'British';
    } else {
      str = ethnicity_string;
      trimmedStr = str.substr(str.indexOf(':') + 2, str.length);
    }
    return trimmedStr;
  },
  render: function() {
    var ethnicity, group, i, j;
    return React.createElement("div", null, React.createElement("table", {
      "className": "table table-condensed table-hover table-striped mb-oxygen"
    }, React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null, (this.props.activeCategory === 'default' ? 'Geography:' : this.props.activeCategory + ':')), React.createElement("td", null, React.createElement("strong", null, (this.props.activeValue === 'default' ? 'England \& Wales' : this.props.activeValue)))), ((function() {

      /*<tr>
        <td>Ethnicity:</td> 
        <td><strong>{ if @props.mouseOverData.key? then @props.mouseOverData.key else 'All' }</strong></td>
      </tr>
       */
    })()))), ((function() {

      /*
      <table className="table table-condensed table-hover table-striped mb-oxygen">
        <thead>
            <tr>
              <th>Age group</th>
              <th>Total population</th>
              <th>Total bad health</th>
              <th>% bad health</th>
            </tr>
        </thead>
        <tbody>
          <tr>
            <td>Age 0 to 15:</td>
            <td><strong>{ 
              if @props.data.total_item? then format @props.data.total_item.total_age_detail[0].values.total_population
            }</strong></td>
            <td><strong>{ 
              if @props.data.total_item? then format @props.data.total_item.total_age_detail[0].values.bad_health
            }</strong></td>
            <td><strong>{ 
              if @props.data.total_item? then percFormat (@props.data.total_item.total_age_detail[0].values.bad_health / @props.data.total_item.total_age_detail[0].values.total_population)
            }</strong></td>
          </tr>
          <tr>   
            <td>Age 16 to 24:</td>
            <td><strong>{ 
              if @props.data.total_item? then format @props.data.total_item.total_age_detail[1].values.total_population
            }</strong></td>
            <td><strong>{ 
              if @props.data.total_item? then format @props.data.total_item.total_age_detail[1].values.bad_health
            }</strong></td>
            <td><strong>{ 
              if @props.data.total_item? then percFormat (@props.data.total_item.total_age_detail[1].values.bad_health / @props.data.total_item.total_age_detail[1].values.total_population)
            }</strong></td>
          </tr>
          <tr>   
            <td>Age 25 to 34:</td>
            <td><strong>{ 
              if @props.data.total_item? then format @props.data.total_item.total_age_detail[2].values.total_population
            }</strong></td>
            <td><strong>{ 
              if @props.data.total_item? then format @props.data.total_item.total_age_detail[2].values.bad_health
            }</strong></td>
            <td><strong>{ 
              if @props.data.total_item? then percFormat (@props.data.total_item.total_age_detail[2].values.bad_health / @props.data.total_item.total_age_detail[2].values.total_population)
            }</strong></td>
          </tr>
          <tr>   
            <td>Age 35 to 49:</td>
            <td><strong>{ 
              if @props.data.total_item? then format @props.data.total_item.total_age_detail[3].values.total_population
            }</strong></td>
            <td><strong>{ 
              if @props.data.total_item? then format @props.data.total_item.total_age_detail[3].values.bad_health
            }</strong></td>
            <td><strong>{ 
              if @props.data.total_item? then percFormat (@props.data.total_item.total_age_detail[3].values.bad_health / @props.data.total_item.total_age_detail[3].values.total_population)
            }</strong></td>
          </tr>
          <tr>   
            <td>Age 50 to 64:</td>
            <td><strong>{ 
              if @props.data.total_item? then format @props.data.total_item.total_age_detail[4].values.total_population
            }</strong></td>
            <td><strong>{ 
              if @props.data.total_item? then format @props.data.total_item.total_age_detail[4].values.bad_health
            }</strong></td>
            <td><strong>{ 
              if @props.data.total_item? then percFormat (@props.data.total_item.total_age_detail[4].values.bad_health / @props.data.total_item.total_age_detail[4].values.total_population)
            }</strong></td>        
          </tr>
          <tr>   
            <td>Age 65 and over:</td>
            <td><strong>{ 
              if @props.data.total_item? then format @props.data.total_item.total_age_detail[5].values.total_population
            }</strong></td>
            <td><strong>{ 
              if @props.data.total_item? then format @props.data.total_item.total_age_detail[5].values.bad_health
            }</strong></td>
            <td><strong>{ 
              if @props.data.total_item? then percFormat (@props.data.total_item.total_age_detail[5].values.bad_health / @props.data.total_item.total_age_detail[5].values.total_population)
            }</strong></td>        
          </tr>
          <tr>
            <td>Total population:</td> 
            <td><strong>{ if @props.data.total_item? then format @props.data.total_item.population else '' }</strong></td>
            <td><strong>{ if @props.data.total_item? then format @props.data.total_item.number_bad_health else '' }</strong></td> 
            <td><strong>{ if @props.data.total_item? then percFormat @props.data.total_item.percent_bad_health else '' }</strong></td>   
          </tr>
        </tbody>
      </table>
       */
    })()), React.createElement("div", {
      "className": "mb-oxygen"
    }, React.createElement("h4", null, React.createElement("strong", null, "Highlight ethnicities")), React.createElement("div", {
      "className": "mb-grey-box clearfix"
    }, React.createElement("img", {
      "src": "./images/mb_ajax_loader.gif",
      "className": (this.props.isFetching === true && this.props.isDefault === true ? 'mb-spinner' : 'hide')
    }), ((function() {
      var k, len, ref, results;
      if (this.props.data.ethnicities != null) {
        ref = this.props.data.ethnicities_grouped;
        results = [];
        for (i = k = 0, len = ref.length; k < len; i = ++k) {
          group = ref[i];
          results.push(React.createElement("div", {
            "key": i,
            "className": "col-sm-4 mt-small ethnic-checkboxes-column"
          }, (function() {
            var l, len1, results1;
            results1 = [];
            for (j = l = 0, len1 = group.length; l < len1; j = ++l) {
              ethnicity = group[j];
              if (typeof ethnicity === 'object') {
                results1.push(React.createElement("div", {
                  "key": ethnicity.title
                }, React.createElement("label", {
                  "className": "ethnic_title"
                }, React.createElement("strong", null, ethnicity.title))));
              } else {
                results1.push(React.createElement("div", {
                  "className": "checkbox",
                  "key": ethnicity
                }, React.createElement("label", null, React.createElement("input", {
                  "type": "checkbox",
                  "value": ethnicity,
                  "onChange": this.handleChange
                }), this.trimEthnicity(ethnicity))));
              }
            }
            return results1;
          }).call(this)));
        }
        return results;
      }
    }).call(this)))));
  }
});

module.exports = GenHealthDetailComponent;

//# sourceMappingURL=general-health-detail-component.map
