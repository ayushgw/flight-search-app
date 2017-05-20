import angular from 'angular';

import './results.css';
import ResultsController from './results.controller';

export default angular.module('results', [])
.controller('ResultsController', ResultsController)
.name;
