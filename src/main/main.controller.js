export default function MainController(AuthService, $state) {
  "ngInject";
  var main = this;

  main.message = null;
  main.error = null;

  main.registerUser = function(user) {
    AuthService.registerUser(user)
    .then(function(res) {
      console.log('User Registered Successfully!');
      console.log(res);
    })
    .catch(function(err) {
      console.log(err);
    });
  };

  main.loginUser = function(user) {
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
