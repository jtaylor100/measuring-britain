// Generated by CoffeeScript 1.10.0
var dataSet, defaultOptions, makeEconCountryRequest, nomisEndPoint,
  hasProp = {}.hasOwnProperty;

nomisEndPoint = "https://www.nomisweb.co.uk/api/v01/dataset/";

dataSet = "NM_679_1.data.json";

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

makeEconCountryRequest = function(options) {
  var defaultNomisOptions, generateDataObject, generateQueryString, getOptions, queryStringArr;
  defaultNomisOptions = {
    dataSet: dataSet,
    queryStringOps: {
      date: "date=latest",
      geography: "geography=2092957703",
      c_ecopuk11: "c_ecopuk11=3,6,11,14...18",
      c_cob: "c_cob=2,11,14,15,20,26,29",
      c_age: "c_age=0",
      measures: "measures=20100",
      c_sex: "c_sex=0"
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
        date: "date=latest",
        c_sex: "c_sex=0",
        c_ecopuk11: "c_ecopuk11=3,6,11,14...18",
        c_cob: "c_cob=2,11,14,15,20,26,29",
        c_age: "c_age=0",
        measures: "measures=20100",
        geography: "geography=" + valCode
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
  console.log('makeEconCountryRequest');
  return $.getJSON(nomisEndPoint + dataSet + generateQueryString(getOptions, queryStringArr));
};

module.exports = makeEconCountryRequest;

//# sourceMappingURL=econ-activity-country-service.map