// Generated by CoffeeScript 1.10.0
var $, dataSet, defaultOptions, makeRelBarsRequest, nomisEndPoint,
  hasProp = {}.hasOwnProperty;

nomisEndPoint = "https://www.nomisweb.co.uk/api/v01/dataset/";

dataSet = "NM_659_1.data.json";

$ = require('jquery');

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

makeRelBarsRequest = function(options) {
  var defaultNomisOptions, generateDataObject, generateQueryString, getOptions, queryStringArr;
  defaultNomisOptions = {
    dataSet: dataSet,
    queryStringOps: {
      geography: "geography=K04000001",
      c_ethpuk11: "c_ethpuk11=0"
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
      queryStringOps: {
        geography: (function() {
          if (catLabel.indexOf('Geography') !== -1) {
            return "geography=" + valCode;
          } else {
            return "geography=K04000001";
          }
        })(),
        ethnicity: (function() {
          if (catCode === 'ethnicities') {
            return "c_ethpuk11=" + valCode;
          } else {
            return "c_ethpuk11=0";
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
  return $.getJSON(nomisEndPoint + dataSet + generateQueryString(getOptions, queryStringArr));
};

module.exports = makeRelBarsRequest;
