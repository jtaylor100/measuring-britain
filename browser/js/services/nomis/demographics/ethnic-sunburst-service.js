// Generated by CoffeeScript 1.10.0
var $, dataSet, defaultOptions, makeSunburstRequest, nomisEndPoint,
  hasProp = {}.hasOwnProperty;

$ = require('jQuery');

nomisEndPoint = "https://www.nomisweb.co.uk/api/v01/dataset/";

dataSet = "NM_608_1.data.json";

defaultOptions = {
  isDefault: true,
  category: {
    label: 'default',
    value: 'default'
  },
  value: {
    label: 'default',
    value: 'default'
  }
};

makeSunburstRequest = function(options) {
  var defaultNomisOptions, generateDataObject, generateQueryString, getOptions, queryStringArr;
  defaultNomisOptions = {
    dataSet: dataSet,
    queryStringOps: {
      geography: "geography=K04000001",
      rural_urban: 0,
      measures: 20100
    }
  };
  queryStringArr = [];
  generateDataObject = function(o) {
    var catCode, catLabel, valCode, valLabel;
    catCode = o.category.value;
    catLabel = o.category.label;
    valLabel = o.value.label;
    valCode = o.value.value;
    return {
      dataSet: dataSet,
      queryStringOps: {
        rural_urban: 0,
        measures: 20100,
        geography: (function() {
          if (catLabel.indexOf('Geography') !== -1) {
            return "geography=" + valCode;
          } else {
            return "geography=K04000001";
          }
        })(),
        religion: (function() {
          if (catCode === 'religions') {
            return "c_relpuk11=" + valCode;
          } else {
            return "c_relpuk11=0";
          }
        })()
      }
    };
  };
  getOptions = function() {
    if (options != null) {
      return generateDataObject(options);
    } else {
      return defaultNomisOptions;
    }
  };
  generateQueryString = function(getOptions, queryStringArr) {
    var key, ref, value;
    ref = getOptions().queryStringOps;
    for (key in ref) {
      if (!hasProp.call(ref, key)) continue;
      value = ref[key];
      if (value !== "") {
        queryStringArr.push(value);
      }
    }
    return '?' + queryStringArr.join('\&');
  };
  return $.getJSON(nomisEndPoint + getOptions().dataSet + generateQueryString(getOptions, queryStringArr));
};

module.exports = makeSunburstRequest;
