export default function FlightsService(FLIGHTS_APIBASE, $http) {
  "ngInject";
  var service = this;

  service.getFlights = function(params) {
    params.app_id = '092a4a89';
    params.app_key = '3957ce5215831a305bd6b9858547944f';
    params.format = 'json';

    return $http.get(FLIGHTS_APIBASE, { params })
    .then(function(res) {
      console.log(res);
    });
  };

}
