import LogoClock from '../../images/clock-fast.png';
import LogoClose from '../../images/close-circle.png';
import moment from 'moment';

var ddo = {
  template: require('./flightDetails.template.html'),
  controller: FlightDetailsComponentController,
  bindings: {
    flight: '<',
    onClose: '&'
  }
};

function FlightDetailsComponentController(FlightsService) {
  "ngInject";
  var $ctrl = this;
  moment().format();

  $ctrl.$onInit = function() {
    let flight = $ctrl.flight;
    $ctrl.flightdetails = FlightsService.getFlightDetails(flight);
  };

  $ctrl.getformattedDate = function(date) {
    let formattedDate = date.substring(0, 10);
    formattedDate = moment(formattedDate).format('ll');
    return formattedDate;
  };

  $ctrl.close = function() {
    $ctrl.onClose({ close: true });
  };

  $ctrl.LogoClose = LogoClose;
  $ctrl.LogoClock = LogoClock;
}

export default ddo;
