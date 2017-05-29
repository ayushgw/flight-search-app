export default function IataCodesService(IATA_APIBASE, $http) {
  "ngInject";
  var service = this;

  var params = {
    api_key: '871144b9-6cf5-494f-9db6-f1bb13286c57'
  };

  service.getIataCodes = function() {
    var iataCodes = $http.get(IATA_APIBASE, { params })
    .then(function(result) {
      console.log(result);
      return result;
    })
    .catch(function(error) {
      return error;
    });

    return iataCodes;
  };

}
