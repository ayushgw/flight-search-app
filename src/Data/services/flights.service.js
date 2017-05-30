export default function FlightsService(FLIGHTS_APIBASE, $http) {
  "ngInject";
  var service = this;

  service.getFlights = function(params) {
    let flightparams = {
      app_id: '092a4a89',
      app_key: '3957ce5215831a305bd6b9858547944f',
      format: 'json',
      source: params.source,
      destination: params.destination,
      dateofdeparture: params.dateofdeparture,
      seatingclass: params.seatingclass,
      adults: params.adults,
      children: params.children,
      infants: params.infants,
      counter: params.counter
    };


    let flightsdata = $http.get(FLIGHTS_APIBASE, { params: flightparams })
    .then(function(data) {
      return data;
    })
    .catch(function(error) {
      return error;
    });

    return flightsdata;
  };

}
