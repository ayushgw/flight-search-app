import angular from 'angular';

import config from './Data.config';
import AuthInit from './services/auth.init';
import AuthService from './services/auth.service';
import FlightsService from './services/flights.service';
import IataCodesService from './services/iatacodes.service';


export default angular.module('Data', [])
.config(config)
.factory('AuthInit', AuthInit)
.service('AuthService', AuthService)
.service('FlightsService', FlightsService)
.service('IataCodesService', IataCodesService)
.constant('IATA_APIBASE', 'http://iatacodes.org/api/v6/airports')
.constant('FLIGHTS_APIBASE', 'http://developer.goibibo.com/api/search/')
.name;