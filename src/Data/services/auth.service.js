export default function AuthService(AuthInit) {
  "ngInject";
  var service = this;

  // Initializing Firebase Auth Object
  var Auth = AuthInit.Auth();
  var GoogleProvider = AuthInit.GoogleProvider;
  var GithubProvider = AuthInit.GithubProvider;

  service.registerUser = function(user) {
    return Auth.createUserWithEmailAndPassword(user.email, user.password);
  };

  service.loginUser = function(user) {
    return Auth.signInWithEmailAndPassword(user.email, user.password);
  };

  service.oauthUserLogin = function(provider) {
    let AuthProvider = AuthInit[provider];
    return Auth.signInWithPopup(AuthProvider);
  };

  service.logoutUser = function() {
    return Auth.signOut();
  };

  service.deleteUser = function(user) {
    return Auth.deleteUser(user);
  };

}
