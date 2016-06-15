// Generated by CoffeeScript 1.10.0
var dataSet, defaultOptions, makeGenHealthRequest, nomisEndPoint,
  hasProp = {}.hasOwnProperty;

nomisEndPoint = "https://www.nomisweb.co.uk/api/v01/dataset/";

dataSet = "NM_739_1.data.json";

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

makeGenHealthRequest = function(options) {
  var defaultNomisOptions, generateDataObject, generateQueryString, getOptions, queryStringArr;
  defaultNomisOptions = {
    dataSet: dataSet,
    queryStringOps: {
      date: "date=latest",
      geography: "geography=2092957703",
      c_ethpuk11: "c_ethpuk11=2...5,7...10,12...16,18...20,22,23",
      c_health: "c_health=1...3",
      c_age: "c_age=1...6",
      measures: "measures=20100",
      c_sex: "c_sex=0"
    }
  };
  queryStringArr = [];
  generateDataObject = function(o) {
    var catCode, catLabel, sexCode, sexLabel, valCode, valLabel;
    catCode = o.category.value;
    catLabel = o.category.label;
    valLabel = o.value.label;
    valCode = o.value.value;
    sexLabel = o.sex.label;
    sexCode = o.sex.value;
    return {
      queryStringOps: {
        date: "date=latest",
        c_ethpuk11: "c_ethpuk11=2...5,7...10,12...16,18...20,22,23",
        c_health: "c_health=1...3",
        c_age: "c_age=1...6",
        measures: "measures=20100",
        c_sex: (function() {
          if (sexLabel === 'Female') {
            return "c_sex=2";
          } else if (sexLabel === 'Male') {
            return "c_sex=1";
          } else {
            return "c_sex=0";
          }
        })(),
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
  return $.getJSON(nomisEndPoint + dataSet + generateQueryString(getOptions, queryStringArr));
};

module.exports = makeGenHealthRequest;

//# sourceMappingURL=general-health-service.map
