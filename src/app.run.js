export default function EnableUIRouterErrors($trace, $transitions, $rootScope, $state, $location, AuthService) {
  "ngInject";

  $trace.enable('TRANSITION');

  var Auth = AuthService.getAuth();
  $rootScope.logoutUser = function() {
    console.log('User logged out!');
    $rootScope.isUserLoggedIn = false;
    Auth.signOut();
  };

  $transitions.onStart({ to: 'home.**' }, function(trans) {
    let auth = trans.injector().get('AuthService');
    return auth.isAuthenticated()
    .then(function(result) {
      // User is Authenticated
      console.info('User is logged in!');
      $rootScope.isUserLoggedIn = true;
    })
    .catch(function(error) {
      // User isn't Authenticated. Redirect to 'main'
      console.error('User is not logged in!');
      $rootScope.isUserLoggedIn = false;
      return trans.router.stateService.target('main');
    });
  });

  $transitions.onSuccess({}, function() {
    console.info('State Change Success');
    $rootScope.state = $state.current.name;
  });

}
