import angular from 'angular';

import config from './Data.config';
import AuthInit from './services/auth.init';
import AuthService from './services/auth.service';
import FlightsService from './services/flights.service';


export default angular.module('Data', [])
.config(config)
.factory('AuthInit', AuthInit)
.service('AuthService', AuthService)
.service('FlightsService', FlightsService)
.constant('FLIGHTS_APIBASE', 'https://api.sandbox.amadeus.com/v1.2/flights/extensive-search')
// .constant('IATA_APIBASE', '/')
.name;
