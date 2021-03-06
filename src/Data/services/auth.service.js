export default function AuthService(AuthInit, $q, $rootScope) {
  "ngInject";
  var service = this;

  // Initializing Firebase Auth Object
  var Auth = AuthInit.Auth();

  service.getAuth = function() {
    return Auth;
  };

  service.isAuthenticated = function() {
    var deferred = $q.defer();
    let flag = false;

    Auth.onAuthStateChanged(function(user) {
      if (user) {
        $rootScope.loggedUser = user;
        console.log(user);
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
    let User = (user || Auth.currentUser());
    User.sendEmailVerification()
    .then(function() {
      // console.log('Email Verification Sent!');
    })
    .catch(function() {
      // console.log('Email Verification could not be sent!');
    });
  };

  service.updateUserProfile = function(user, updateObj) {
    user.updateProfile(updateObj)
    .then(function() {
      // Profile Updated
    })
    .catch(function() {
      // Error while updating profile
    })
  };

  service.loginUser = function(user) {
    return Auth.signInWithEmailAndPassword(user.email, user.password);
  };

  service.oauthUserLogin = function(provider) {
    let AuthProvider = AuthInit[provider];
    let oauthlogin = Auth.signInWithPopup(AuthProvider);
    oauthlogin.then(function(result) {
      let user = result.user;
      return user;
    })
    .catch(function(error) {
      return error;
    });

    return oauthlogin;
  };

  service.anonymousLogin = function() {
    return Auth.signInAnonymously();
  }

  service.sendRecoveryEmail = function(email) {
    return Auth.sendPasswordResetEmail(email);
  };

  service.logoutUser = function() {
    return Auth.signOut();
  };

  service.deleteUser = function() {
    let user = Auth.currentUser();
    Auth.deleteUser(user);
  };

}
