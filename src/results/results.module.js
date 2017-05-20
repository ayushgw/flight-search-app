import angular from 'angular';
import uirouter from 'angular-ui-router';

import ResultsController from './results.controller';

angular.module('results', [])
.controller('ResultsController', ResultsController);
