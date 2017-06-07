export default function MainController(AuthService, $state, $rootScope) {
  "ngInject";
  var main = this;

  main.error = {};
  main.spinner = {
    login: false,
    register: false,
    forgotpassword: false
  };

  // Show/Hide Spinner
  main.toggleSpinner = function(name) {
    $rootScope.$apply(function() {
      main.spinner[name] = !main.spinner[name];
    });
  };

  // Display Error Message
  main.displayError = function(name, message) {
    $rootScope.$apply(function() {
      main.error[name] = message;
    });
  };

  main.registerUser = function(user) {
    main.spinner.register = true;
    AuthService.registerUser(user)
    .then(function(res) {
      AuthService.sendVerificationEmail(res);
      main.toggleSpinner('register');
      main.isUserRegistered = true;
      main.user.register = {};
      $rootScope.$digest();
    })
    .catch(function(err) {
      console.log(err);
      main.toggleSpinner('register');
      var errormsg = "User could not be registered!";
      main.displayError('register', errormsg);
    });
  };

  main.loginUser = function(user) {
    main.spinner.login = true;
    let userlogin = AuthService.loginUser(user)
    userlogin.then(function(result) {
      main.toggleSpinner('login');
      $state.go('home.search');
    })
    .catch(function(error) {
      main.toggleSpinner('login');
      var errormsg = "Username/Password is incorrect";
      main.displayError('login', errormsg);
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
    });
  };

  // Forgot Password
  main.sendRecoveryEmail = function(email) {
    main.spinner.forgotpassword = true;
    let sendrecoveryemail = AuthService.sendRecoveryEmail(email);
    sendrecoveryemail.then(function(result) {
      main.toggleSpinner('forgotpassword');
      main.recoveryEmailSent = true;
      $rootScope.$digest();
    })
    .catch(function(error) {
      console.log(error);
      main.toggleSpinner('forgotpassword');
      var errormsg = "There is no user record corresponding to this email. The user may have been deleted.";
      main.displayError('forgotpassword', errormsg);
    });
  };

  main.logoutUser = function() {
    AuthService.logoutUser();
  };

  main.deleteUser = function(user) {
    AuthService.deleteUser(user);
  };

}
