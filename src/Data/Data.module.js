import angular from 'angular';

import config from './Data.config';
import AuthInit from './services/auth.init';
import AuthService from './services/auth.service';


export default angular.module('Data', [])
.config(config)
.factory('AuthInit', AuthInit)
.service('AuthService', AuthService)
.name;
