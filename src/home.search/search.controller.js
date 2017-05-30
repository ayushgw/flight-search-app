export default function SearchController(IATACODES, $state) {
  "ngInject";
  var search = this;

  //Date Picker
  var date = new Date();
  search.date = date;
  search.minDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  search.maxDate = new Date(date.getFullYear(), date.getMonth() + 6, date.getDate());

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
    let temp = search.source;
    search.source = search.destination;
    search.destination = temp;
  };

  function getFormattedDate(dateObj) {
    let year = dateObj.getFullYear();
    let month = dateObj.getMonth() + 1;
    month = (month < 10) ? '0' + month : month;
    let date = dateObj.getDate();
    date = (date < 10) ? '0' + date : date;

    let finaldate = year + month + date;
    return finaldate;
  }

  // Search for flights
  search.getResults = function(flightparams) {
    let params = {
      source: 'BOM',
      // source: flightparams.source.code,
      destination: 'DEL',
      // destination: flightparams.destination.code,
      dateofdeparture: getFormattedDate(search.date),
      seatingclass: flightparams.seatingclass,
      adults: flightparams.adults,
      children: flightparams.children,
      infants: flightparams.infants,
      counter: flightparams.counter ? '0' : '100' // 100 for domestic, 0 for international
    };

    $state.go('home.results', {
      source: 'BOM',
      // source: flightparams.source.code,
      destination: 'DEL',
      // destination: flightparams.destination.code,
      dateofdeparture: getFormattedDate(search.date),
      seatingclass: flightparams.seatingclass,
      adults: flightparams.adults,
      children: flightparams.children,
      infants: flightparams.infants,
      counter: flightparams.counter ? '0' : '100' // 100 for domestic, 0 for international
    });
  };

}
