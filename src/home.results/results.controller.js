export default function ResultsController(FlightsService, $stateParams, $rootScope) {
  "ngInject";
  var results = this;

  const flightparams = $stateParams;
  results.isLoading = true;

  results.cities = {
    from: {
      citycode: flightparams.source,
      cityname: flightparams.sourcecity
    },
    to: {
      citycode: flightparams.destination,
      cityname: flightparams.destinationcity
    }
  };

  var flightsdata = FlightsService.getFlights(flightparams);
  flightsdata.then(function(data) {
    results.isLoading = false;
    results.flightsdata = data;
  })
  .catch(function(error) {
    results.isLoading = false;
    results.flightsdata = null;
  });

}
