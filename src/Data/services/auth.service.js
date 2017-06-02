export default function AuthService(AuthInit) {
  "ngInject";
  var service = this;

  // Initializing Firebase Auth Object
  var Auth = AuthInit.Auth();
  // var GoogleProvider = AuthInit.GoogleProvider;
  // var GithubProvider = AuthInit.GithubProvider;
  // var FacebookProvider = AuthInit.FacebookProvider;

  service.registerUser = function(user) {
    return Auth.createUserWithEmailAndPassword(user.email, user.password);
  };

  service.loginUser = function(user) {
    return Auth.signInWithEmailAndPassword(user.email, user.password);
  };

  service.oauthUserLogin = function(provider) {
    let AuthProvider = AuthInit[provider];
    let oauthlogin = Auth.signInWithPopup(AuthProvider);
    oauthlogin.then(function(result) {
      var token = result.credential.accessToken;
      console.log('User LoggedIn with ' + provider + '. Token: ' + token);
      var user = result.user;
      console.log(user);
    })
    .catch(function(error) {
      console.log(error);
    });
  };

  service.logoutUser = function() {
    return Auth.signOut();
  };

  service.deleteUser = function(user) {
    return Auth.deleteUser(user);
  };

}
