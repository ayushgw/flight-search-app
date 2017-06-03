import angular from 'angular';

import config from './Data.config';
import AuthInit from './services/auth.init';
import AuthService from './services/auth.service';
import UserService from './services/user.service';
import FlightsService from './services/flights.service';
import IataCodesService from './services/iatacodes.service';


export default angular.module('Data', [])
.config(config)
.factory('AuthInit', AuthInit)
.service('AuthService', AuthService)
.service('UserService', UserService)
.service('FlightsService', FlightsService)
.service('IataCodesService', IataCodesService)
.constant('FLIGHTS_APIBASE', 'https://developer.goibibo.com/api/search/')
.name;
