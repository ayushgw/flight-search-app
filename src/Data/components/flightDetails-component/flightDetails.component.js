import LogoInr from '../../images/currency-inr.png';
import LogoAirplane from '../../images/airplane.png';
import LogoClock from '../../images/clock.png';
import moment from 'moment';

var ddo = {
  template: require('./flightDetails.template.html'),
  controller: FlightDetailsComponentController,
  bindings: {
    flight: '<'
  }
};

function FlightDetailsComponentController() {
  var $ctrl = this;
  moment().format();

  $ctrl.$onInit = function() {
    console.log($ctrl.flight);
  }

}

export default ddo;
