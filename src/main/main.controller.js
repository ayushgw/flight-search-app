export default function MainController(AuthService) {
  "ngInject";
  var main = this;

  main.message = null;
  main.error = null;

  main.loginUser = function(user) {
    AuthService.loginUser(user);
  };

  main.registerUser = function(user) {
    AuthService.registerUser(user);
  };

  main.logoutUser = function() {
    AuthService.logoutUser();
  };

  main.deleteUser = function(user) {
    AuthService.deleteUser(user);
  };

  main.oauthUserLogin = function(provider) {
    let Provider = provider + 'Provider';
    AuthService.oauthUserLogin(Provider);
  };
  
}
