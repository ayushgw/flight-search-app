import iatacodesjson from '../assets/usa-iata-codes.json';

export default function IataCodesService() {
  "ngInject";
  var service = this;

  service.getIataCodes = function() {
    var iataCodes = iatacodesjson;
    return iataCodes;
  }

}
