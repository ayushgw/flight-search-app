export default function SearchController(FlightsService, IATACODES) {
  "ngInject";
  var search = this;

  // Cities + IATA Codes
  search.iataCodes = IATACODES.data.response;

  function queryFilter(query) {
    var lowercaseQuery = angular.lowercase(query);
    var matches = [];

    search.iataCodes.forEach(function(city) {
      var lowercaseCity = angular.lowercase(city.name);
      if (lowercaseCity.indexOf(lowercaseQuery) === 0) {
        matches.push(city);
      }
    });

    return matches;
  }

  search.searchAirport = function(query) {
    var results = query ? queryFilter(query) : search.iataCodes;
    return results;
  };

  // Interchange Search Cities
  search.interchangeSearchCities = function() {
    console.log(search.source);
    console.log(search.destination);
    // var flag = search.source && search.destination ? true : false;
    //
    // if(flag) {
    //   console.log(flag);
      var temp = search.source;
      search.source = search.destination;
      search.destination = temp;
    // }
  };


  // Search for flights
  search.getResults = function() {
    console.log(search.source);
    console.log(search.destination);
    clearInput();
  };

  search.flightparams = {};

  // var params = {
  //   source: '' || search.source.description,
  //   destination: '' || search.destination.description,
  //   dateofdeparture: '20170530',
  //   dateofarrival: '',
  //   seatingclass: 'E',
  //   adults: 1,
  //   children: 0,
  //   infants: 0,
  //   counter: 100 // 100 for domestic, 0 for international
  // };

  // var flightsData = FlightsService.getFlights(params);
  // console.log(flightsData);


}
