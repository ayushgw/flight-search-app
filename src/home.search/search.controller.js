export default function SearchController(FlightsService) {
  "ngInject";
  var results = this;

  var params = {
    origin: 'DEL',
    destination: 'BOM',
    departure_date: '2017-05-30',
    direct: 'false'
  };
  var flightsData = FlightsService.getFlights(params);
  console.log(flightsData);
}
