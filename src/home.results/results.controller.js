export default function ResultsController(FLIGHTSDATA, CITIES, FlightsService, $rootScope) {
  "ngInject";
  var results = this;

  results.cities = CITIES;
  console.log(results.cities);
  results.flightsdata = FLIGHTSDATA;
  console.log(results.flightsdata);
  results.citycodes = {
    from: results.cities.from.citycode,
    to: results.cities.to.citycode
  };
  console.log(results.citycodes);
  $rootScope.isLoading = false;

  // TODO: To get flight details
  results.flightdetails = function(flight) {
    var flightdetails = FlightsService.getFlightDetails(flight);
    console.log(flightdetails);
  };

}
