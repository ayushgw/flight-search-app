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
    .then(function(response) {
      let data = response.data.data.onwardflights;
      let refinedData = [];
      angular.forEach(data, function(key, value) {
        let obj = {
          origin: key.origin,
          flightcode: key.flightcode,
          depterminal: key.depterminal,
          seatingclass: key.seatingclass,
          deptime: key.deptime,
          duration: key.duration,
          arrterminal: key.arrterminal,
          destination: key.destination,
          stops: key.stops,
          seatsavailable: key.seatsavailable,
          fare: key.fare.totalfare,
          onwardflights: key.onwardflights,
          splitduration: key.splitduration,
          airline: key.airline,
          depdate: key.depdate,
          arrtime: key.arrtime,
          arrdate: key.arrdate
        };

        refinedData.push(obj);
      })
      return refinedData;
    })
    .catch(function(error) {
      return error;
    });

    return flightsdata;
  };

}
