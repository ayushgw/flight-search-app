import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './app.config';

angular.module('app', [])
.config(routes);
