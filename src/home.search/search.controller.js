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
    search.iataCodes.forEach(function(item) {
      let airport = angular.lowercase(item.airport);
      let country = angular.lowercase(item.country);
      if (airport.indexOf(lowercaseQuery) === 0 || country.indexOf(lowercaseQuery) === 0) {
        matches.push(item);
      }
    });
    return matches;
  }

  // Cities + IATA Codes
  search.iataCodes = IATACODES;
  search.searchAirport = function(query, exclude) {
    let results = query ? queryFilter(query) : angular.copy(search.iataCodes);
    // let exclude = (search.flightparams.source || search.flightparams.destination);
    if(exclude) {
      let code = exclude.iatacode;
      let index = results.findIndex(value => value.iatacode === code);
      console.log(index);
      results.splice(index, 1);
    }
    return results;
  };

  // Interchange Search Cities
  search.interchangeSearchCities = function() {
    let temp = search.flightparams.source;
    search.flightparams.source = search.flightparams.destination;
    search.flightparams.destination = temp;
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
    $state.go('home.results', {
      sourcecity: flightparams.source.iatacode + ', ' + flightparams.source.country,
      source: flightparams.source.iatacode,
      destinationcity: flightparams.destination.iatacode + ', ' + flightparams.destination.country,
      destination: flightparams.destination.iatacode,
      dateofdeparture: getFormattedDate(search.date),
      seatingclass: flightparams.seatingclass,
      adults: flightparams.adults,
      children: '0',
      infants: '0',
      counter: flightparams.counter ? '0' : '100' // 100 for domestic, 0 for international
    });
  };

}
