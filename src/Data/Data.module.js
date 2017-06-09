import angular from 'angular';

import AuthInit from './services/auth.init';
import AuthService from './services/auth.service';
import FlightsService from './services/flights.service';
import IataCodesService from './services/iatacodes.service';

// Components
import './components/viewLoader-component/viewLoader.css';
import viewLoader from './components/viewLoader-component/viewLoader.component';
import './components/flightListItem-component/flightListItem.css';
import flightListItem from './components/flightListItem-component/flightListItem.component';
import './components/flightDetails-component/flightDetails.css';
import flightDetails from './components/flightDetails-component/flightDetails.component';


export default angular.module('Data', [])
.factory('AuthInit', AuthInit)
.service('AuthService', AuthService)
.service('FlightsService', FlightsService)
.service('IataCodesService', IataCodesService)
.constant('FLIGHTS_APIBASE', 'https://developer.goibibo.com/api/search/')
.component('viewLoader', viewLoader)
.component('flightListItem', flightListItem)
.component('flightDetails', flightDetails)
.name;
