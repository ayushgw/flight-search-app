import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './app.config';

import main from './main/main.module';
import home from './home/home.module';
import results from './results/results.module';

angular.module('app', [uirouter, main, home, results])
.config(routes);
