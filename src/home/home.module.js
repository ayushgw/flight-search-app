import angular from 'angular';

import './home.css';
import HomeController from './home.controller';

export default angular.module('home', [])
.controller('HomeController', HomeController)
.name;
