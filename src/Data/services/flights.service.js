export default function FlightsService(FLIGHTS_APIBASE, $http) {
  "ngInject";
  var service = this;

  service.getFlights = function(params) {
    params.apikey = 'NNJqfjxqr6Jc0wXvkG2pZeEhsHrkTnCP';

    // return $http.get(FLIGHTS_APIBASE, { params })
    // .then(function(data) {
    //   console.log(data);
    // });
    return 'Flights';
  };
}
