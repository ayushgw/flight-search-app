export default function RoutesConfig($locationProvider, $urlRouterProvider, $stateProvider) {
  "ngInject";

  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('main', {
    url: '/',
    template: require('./main/main.template.html'),
    controller: 'MainController',
    controllerAs: 'main'
  })
  .state('home', {
    abstract: true, //to load a default nested state in state.child declaration
    url: '/home',
    template: require('./home/home.template.html'),
    controller: 'HomeController',
    controllerAs: 'home'
  })
  .state('home.search', {
    url: '/search',
    template: require('./home.search/search.template.html'),
    controller: 'SearchController',
    controllerAs: 'search',
    resolve: {
      IATACODES: function(IataCodesService) {
        "ngInject";
        var iataCodes = IataCodesService.getIataCodes();
        return iataCodes;
      }
    }
  })
  .state('home.results', {
    url: '/results?source&destination&dateofdeparture&seatingclass&adults&children&infants&counter&sourcecity&destinationcity',
    template: require('./home.results/results.template.html'),
    controller: 'ResultsController',
    controllerAs: 'results',
    resolve: {
      FLIGHTSDATA: function($stateParams, FlightsService) {
        "ngInject";

        var flightparams = $stateParams;
        var flightsdata = FlightsService.getFlights(flightparams);
        return flightsdata;
      },
      CITIES: function($stateParams) {
        "ngInject";

        var from = {
          citycode: $stateParams.source,
          cityname: $stateParams.sourcecity
        };
        var to = {
          citycode: $stateParams.destination,
          cityname: $stateParams.destinationcity
        };
        var cities = {
          from: from,
          to: to
        }
        return cities;
      }
    }
  })
  ;
}
