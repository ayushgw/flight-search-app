import LogoAccount from './Data/images/account.png';

export default function EnableUIRouterErrors($trace, $transitions, $rootScope, $state, $location, AuthService) {
  "ngInject";

  // $trace.enable('TRANSITION');

  var Auth = AuthService.getAuth();
  $rootScope.logoutUser = function() {
    $rootScope.isUserLoggedIn = false;
    Auth.signOut();
  };

  // Account Image
  $rootScope.LogoAccount = LogoAccount;

  // Anonymous Login Function
  $rootScope.anonymousLogin = function() {
    $rootScope.isAnonymous = true;
    AuthService.anonymousLogin()
    .then(function() {
      $state.go('home.search');
    });
  };

  $transitions.onStart({ to: 'home.**' }, function(trans) {
    let auth = trans.injector().get('AuthService');
    return auth.isAuthenticated()
    .then(function(result) {
      // User is Authenticated
      $rootScope.isUserLoggedIn = true;
    })
    .catch(function(error) {
      // User isn't Authenticated. Redirect to 'main'
      $rootScope.isUserLoggedIn = false;
      return trans.router.stateService.target('main');
    });
  });

  $transitions.onSuccess({}, function() {
    $rootScope.state = $state.current.name;
  });

}
