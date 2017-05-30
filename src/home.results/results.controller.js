export default function ResultsController(FLIGHTSDATA) {
  "ngInject";
  var results = this;

  results.flightsdata = FLIGHTSDATA;
  console.log(results.flightsdata);

  results.flightdetails = function(flight) {
    console.log(flight);
  }
}
