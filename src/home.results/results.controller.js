export default function ResultsController(FLIGHTSDATA, CITIES, $rootScope) {
  "ngInject";
  var results = this;

  results.cities = CITIES;
  results.flightsdata = FLIGHTSDATA;
  results.citycodes = {
    from: results.cities.from.citycode,
    to: results.cities.to.citycode
  };
  $rootScope.isLoading = false;

}
