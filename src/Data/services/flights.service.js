export default function FlightsService(FLIGHTS_APIBASE, $http) {
  "ngInject";
  var service = this;

  service.getFlights = function(params) {
    let flightparams = {
      app_id: '092a4a89',
      app_key: '3957ce5215831a305bd6b9858547944f',
      format: 'json',
      source: params.source.substring(0, 3),
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
      return data;
    })
    .catch(function(error) {
      return error;
    });

    return flightsdata;
  };

  service.getFlightDetails = function(flight) {
    let flightdetails = [];
    let data = flight;
    let iterations = flight.stops;
    let index = 0;
    while(iterations >= 0) {
      let obj = {};
      obj.airline = data.airline;
      obj.flightcode = data.flightcode;
      obj.seatingclass = data.seatingclass;
      obj.origin = data.origin;
      obj.deptime = data.deptime;
      obj.depdate = data.depdate;
      obj.splitduration = data.splitduration;
      obj.destination = data.destination;
      obj.arrtime = data.arrtime;
      obj.arrdate = data.arrdate;

      flightdetails.push(obj);
      data = flight.onwardflights[index];
      index++;
      iterations--;
    }

    console.log(flightdetails);
    return flightdetails;
  };

}
