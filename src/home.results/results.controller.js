export default function ResultsController(FLIGHTSDATA, $rootScope) {
  "ngInject";
  var results = this;

  results.flightsdata = FLIGHTSDATA;
  $rootScope.isLoading = false;

  // TODO: To get flight details
  // results.flightdetails = function(flight) {
  //   console.log(flight.onwardflights);
  // };

  results.getformattedDate = function(date) {
    let formattedDate = date.substring(0, 10);
    return formattedDate;
  };
}
