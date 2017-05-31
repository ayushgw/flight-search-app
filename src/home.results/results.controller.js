export default function ResultsController(FLIGHTSDATA) {
  "ngInject";
  var results = this;

  results.flightsdata = FLIGHTSDATA;
  console.log(results.flightsdata);

  // TODO: To get flight details
  // results.flightdetails = function(flight) {
  //   console.log(flight.onwardflights);
  // };

  results.getformattedDate = function(date) {
    let formattedDate = date.substring(0, 10);
    return formattedDate;
  };
}
