export default function SearchController(IATACODES, $state, $rootScope) {
  "ngInject";
  var search = this;

  $rootScope.spinner = false;

  //Date Picker
  var date = new Date();
  search.date = date;
  search.minDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  search.maxDate = new Date(date.getFullYear(), date.getMonth() + 6, date.getDate());

  function queryFilter(query) {
    var lowercaseQuery = angular.lowercase(query);
    var matches = [];
    search.iataCodes.forEach(function(city) {
      let lowercaseCity = angular.lowercase(city.cityname);
      if (lowercaseCity.indexOf(lowercaseQuery) === 0) {
        matches.push(city);
      }
    });
    return matches;
  }

  // Cities + IATA Codes
  search.iataCodes = IATACODES;
  search.searchAirport = function(query) {
    let results = query ? queryFilter(query) : search.iataCodes;
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
    $rootScope.isLoading = true;

    $state.go('home.results', {
      // source: 'BOM',
      source: flightparams.source.iatacode,
      // destination: 'DEL',
      destination: flightparams.destination.iatacode,
      dateofdeparture: getFormattedDate(search.date),
      seatingclass: flightparams.seatingclass,
      adults: flightparams.adults,
      children: flightparams.children,
      infants: flightparams.infants,
      counter: flightparams.counter ? '0' : '100' // 100 for domestic, 0 for international
    });
  };

}
