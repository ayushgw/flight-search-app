import angular from 'angular';
import uirouter from 'angular-ui-router';

import HomeController from './home.controller';

angular.module('home', [])
.controller('HomeController', HomeController);
