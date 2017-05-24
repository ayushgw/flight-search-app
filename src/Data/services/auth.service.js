export default function AuthService(AuthInit) {
  "ngInject";
  var service = this;

  // Initializing Firebase Auth Object
  var Auth = AuthInit.Auth();
  var GoogleProvider = AuthInit.GoogleProvider;
  var GithubProvider = AuthInit.GithubProvider;

  service.registerUser = function(user) {
    Auth.createUserWithEmailAndPassword(user.email, user.password)
    .then(function(userData) {
      console.log('User Created Successfully!');
      console.log(userData);
    })
    .catch(function(errorData) {
      console.log(errorData);
    })
  };

  service.loginUser = function(user) {
    Auth.signInWithEmailAndPassword(user.email, user.password)
    .then(function(userData){
      console.log('User Logged In Successfully!');
      console.log(userData);
    })
    .catch(function(error){
      console.log(error);
    });
  };

  service.deleteUser = function(user) {
    Auth.deleteUser(user)
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
  };

  service.logoutUser = function() {
    Auth.signOut()
    .then(function() {
      console.log('Signed Out');
    }).catch(function(error) {
      console.log(error);
    });
  };

  service.oauthUserLogin = function(provider) {
    console.log(provider);
    let AuthProvider = AuthInit[provider];

    Auth.signInWithPopup(AuthProvider)
    .then(function(result) {
      console.log(result);
      var token = result.credential.accessToken;
      var user = result.user;
    })
    .catch(function(error) {
      console.log(error);
    });
  }

}
