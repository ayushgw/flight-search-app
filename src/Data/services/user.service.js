export default function UserService(AuthService) {
  "ngInject";
  var service = this;

  var Auth = AuthService.getAuth();

  service.User = function() {
    let user = Auth.currentUser;
    return user;
  };
}
