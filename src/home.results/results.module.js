import angular from 'angular';
import pagination from 'angular-utils-pagination';

import './results.css';
import ResultsController from './results.controller';

export default angular.module('results', [pagination])
.controller('ResultsController', ResultsController)
.name;
