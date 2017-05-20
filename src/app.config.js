export default function RoutesConfig($urlRouterProvider, $stateProvider) {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('main', {
    url: '/',
    templateUrl: require('./main/main.template.html'),
    controller: 'MainController',
    controllerAs: 'main'
  })
  .state('home', {
    url: '/',
    templateUrl: require('./home/home.template.html'),
    controller: 'HomeController',
    controllerAs: 'home'
  })
  .state('results', {
    url: '/',
    templateUrl: require('./results/results.template.html'),
    controller: 'ResultsController',
    controllerAs: 'results'
  })
  ;
}
