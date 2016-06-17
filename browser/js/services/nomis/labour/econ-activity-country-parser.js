// Generated by CoffeeScript 1.10.0
var parse;

parse = function(dataArray) {
  var countries, employment_cats_concat, employment_cats_pretty, in_employment_cats, nested_data, out_employment_cats, percentages, sumEconCat;
  sumEconCat = function(arr, val) {
    return d3.sum(arr, function(d) {
      if (d.c_ecopuk11.value === val) {
        return d.obs_value.value;
      }
    });
  };
  nested_data = d3.nest().key(function(d) {
    return d.c_cob.description;
  }).rollup(function(values) {
    return {
      sum: d3.sum(values, function(d) {
        return d.obs_value.value;
      }),
      in_work: {
        employee: sumEconCat(values, 3),
        self_employed: sumEconCat(values, 6)
      },
      out_of_work: {
        unemployed: sumEconCat(values, 11),
        retired: sumEconCat(values, 14),
        student: sumEconCat(values, 15),
        looking_after_home_family: sumEconCat(values, 16),
        long_term_sick_disabled: sumEconCat(values, 17),
        other: sumEconCat(values, 18)
      }
    };
  }).entries(dataArray);
  percentages = nested_data.map(function(country) {
    var in_work, in_work_employee, in_work_self_employed, out_of_work, out_of_work_longterm_sick_disabled, out_of_work_looking_after_home_family, out_of_work_other, out_of_work_retired, out_of_work_student, out_of_work_unemployed, sum, sum_in_work, sum_out_of_work;
    in_work = country.values.in_work;
    out_of_work = country.values.out_of_work;
    sum = country.values.sum;
    in_work_employee = in_work.employee;
    in_work_self_employed = in_work.self_employed;
    out_of_work_unemployed = out_of_work.unemployed;
    out_of_work_retired = out_of_work.retired;
    out_of_work_student = out_of_work.student;
    out_of_work_looking_after_home_family = out_of_work.looking_after_home_family;
    out_of_work_longterm_sick_disabled = out_of_work.long_term_sick_disabled;
    out_of_work_other = out_of_work.other;
    sum_in_work = in_work_employee + in_work_self_employed;
    sum_out_of_work = out_of_work_unemployed + out_of_work_retired + out_of_work_student + out_of_work_looking_after_home_family + out_of_work_longterm_sick_disabled + out_of_work_other;
    return {
      country: country.key,
      in_work: {
        employee: in_work_employee / sum,
        self_employed: in_work_self_employed / sum,
        sum: sum_in_work
      },
      out_of_work: {
        unemployed: out_of_work_unemployed / sum,
        retired: out_of_work_retired / sum,
        student: out_of_work_student / sum,
        looking_after_home_family: out_of_work_looking_after_home_family / sum,
        long_term_sick_disabled: out_of_work_longterm_sick_disabled / sum,
        other: out_of_work_other / sum,
        sum: sum_out_of_work
      }
    };
  });
  in_employment_cats = ['employee', 'self_employed'];
  out_employment_cats = ['unemployed', 'retired', 'student', 'other', 'looking_after_home_family', 'long_term_sick_disabled'];
  employment_cats_concat = in_employment_cats.concat(out_employment_cats);
  employment_cats_pretty = ['Employee', 'Self employed', 'Unemployed', 'Retired', 'Student', 'Other', 'Looking after home/family', 'Long-term sick/disabled'];
  percentages.forEach(function(d) {
    var y0;
    y0 = 0;
    return d.in_work_categories = in_employment_cats.map(function(category) {
      return {
        name: category,
        y0: y0,
        y1: y0 += d.in_work[category]
      };
    });
  });
  percentages.forEach(function(d) {
    var y0;
    y0 = 0;
    return d.out_of_work_categories = out_employment_cats.map(function(category) {
      return {
        name: category,
        y0: y0,
        y1: y0 += d.out_of_work[category]
      };
    });
  });
  countries = nested_data.map(function(country) {
    return country.key;
  });
  return {
    nested_data: nested_data,
    countries: countries,
    percentages: percentages,
    employment_cats_pretty: employment_cats_pretty,
    employment_cats_concat: employment_cats_concat
  };
};

module.exports = parse;

//# sourceMappingURL=econ-activity-country-parser.map
