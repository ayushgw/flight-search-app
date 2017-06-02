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
    AuthService.loginUser(user)
    .then(function(res) {
      console.log('User Logged In Successfully! -- Using Email/Password');
      console.log(res);

      $state.go('home.search');
    })
    .catch(function(err) {
      console.log(err);
    });
  };

  main.oauthUserLogin = function(provider) {
    let Provider = provider + 'Provider';
    AuthService.oauthUserLogin(Provider);
    // .then(function(res) {
    //   console.log('User Logged In Successfully! -- Using ' + provider);
    //   console.log(res);
    //
    //   $state.go('home.search');
    // })
    // .catch(function(err) {
    //   console.log(err);
    // });
  };

  main.logoutUser = function() {
    AuthService.logoutUser();
  };

  main.deleteUser = function(user) {
    AuthService.deleteUser(user);
  };

}
