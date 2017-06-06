export default function MainController(AuthService, $state, $rootScope) {
  "ngInject";
  var main = this;

  main.message = null;
  main.error = null;

  main.registerUser = function(user) {
    $rootScope.spinner = true;
    AuthService.registerUser(user)
    .then(function(res) {
      $rootScope.spinner = false;
      console.log('User Registered Successfully!');
      console.log(res);
    })
    .catch(function(err) {
      $rootScope.spinner = false;
      console.log(err);
    });
  };

  main.loginUser = function(user) {
    $rootScope.spinner = true;
    let userlogin = AuthService.loginUser(user)
    userlogin.then(function(result) {
      $state.go('home.search');
      console.log(result);
    })
    .catch(function(error) {
      console.log(error);
    });
  };

  main.oauthUserLogin = function(provider) {
    let Provider = provider + 'Provider';
    let oauthlogin = AuthService.oauthUserLogin(Provider);
    oauthlogin.then(function(result) {
      console.log(result);
      $state.go('home.search');
    })
    .catch(function(error) {
      console.log(error);
    })
  };

  main.logoutUser = function() {
    AuthService.logoutUser();
  };

  main.deleteUser = function(user) {
    AuthService.deleteUser(user);
  };

}
