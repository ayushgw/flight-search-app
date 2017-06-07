export default function AuthService(AuthInit, $q, $rootScope) {
  "ngInject";
  var service = this;

  // Initializing Firebase Auth Object
  var Auth = AuthInit.Auth();
  // var GoogleProvider = AuthInit.GoogleProvider;
  // var GithubProvider = AuthInit.GithubProvider;
  // var FacebookProvider = AuthInit.FacebookProvider;

  service.getAuth = function() {
    return Auth;
  };

  service.isAuthenticated = function() {
    var deferred = $q.defer();
    let flag = false;

    Auth.onAuthStateChanged(function(user) {
      if (user) {
        flag = true;
        return deferred.resolve(flag);
      } else {
        return deferred.reject(flag);
      }
    });
    return deferred.promise;
  }

  service.registerUser = function(user) {
    return Auth.createUserWithEmailAndPassword(user.email, user.password);
  };

  service.sendVerificationEmail = function(user) {
    user.sendEmailVerification()
    .then(function() {
      console.log('Email Verification Sent!');
    })
    .catch(function() {
      console.log('Email Verification could not be sent!');
    });
  }

  service.loginUser = function(user) {
    return Auth.signInWithEmailAndPassword(user.email, user.password);
  };

  service.oauthUserLogin = function(provider) {
    let AuthProvider = AuthInit[provider];
    let oauthlogin = Auth.signInWithPopup(AuthProvider);
    oauthlogin.then(function(result) {
      let token = result.credential.accessToken;
      console.log('User LoggedIn with ' + provider + '. Token: ' + token);

      let user = result.user;
      return user;
    })
    .catch(function(error) {
      return error;
    });

    return oauthlogin;
  };

  service.sendRecoveryEmail = function(email) {
    return Auth.sendPasswordResetEmail(email);
  };

  service.logoutUser = function() {
    return Auth.signOut();
  };

  service.deleteUser = function(user) {
    return Auth.deleteUser(user);
  };

}
