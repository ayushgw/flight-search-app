import iatacodesjson from '../assets/iata-codes.json';

export default function IataCodesService() {
  "ngInject";
  var service = this;

  service.getIataCodes = function() {
    var iataCodes = iatacodesjson;
    return iataCodes;
  };

}
