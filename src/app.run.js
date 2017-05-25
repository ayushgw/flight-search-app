export default function EnableUIRouterErrors($rootScope) {
  "ngInject";
  
  $rootScope.$on("$stateChangeError", console.log.bind(console));
}
