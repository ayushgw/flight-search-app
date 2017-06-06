import LogoInr from '../../images/currency-inr.png';
import moment from 'moment';

var ddo = {
  template: require('./flightListItem.template.html'),
  controller: FlightListItemComponentController,
  bindings: {
    flight: '<',
    citycodes: '<'
  }
};

function FlightListItemComponentController() {
  var $ctrl = this;
  moment().format();

  $ctrl.LogoInr = LogoInr;

  $ctrl.getformattedDate = function(date) {
    let formattedDate = date.substring(0, 10);
    formattedDate = moment(formattedDate).format('ll');
    return formattedDate;
  };

  $ctrl.getArrivalTimeObject = function(flight) {
    let data = flight;
    let len = data.onwardflights.length;

    if(len) {
      data = data.onwardflights[len-1];
    }

    let arrivalTimeObject = {
      time: data.arrtime,
      date: $ctrl.getformattedDate(data.arrdate)
    };

    return arrivalTimeObject;
  };

  $ctrl.getFlightDuration = function(duration) {
    let split = duration.split('h');
    let hr = split[0] - 1;
    let min = split[1];
    let flightDuration = hr + 'h' + min;
    return flightDuration;
  };

  $ctrl.close = function(value) {
    $ctrl.flightdetails = !value;
  };

}

export default ddo;
