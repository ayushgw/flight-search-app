import 'jquery';
import 'bootstrap-loader';
// import 'font-awesome';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import './app.css';
import routes from './app.config';

import main from './main/main.module';
import home from './home/home.module';
import results from './results/results.module';
import Data from './Data/Data.module';


angular.module('app', [uirouter, main, home, results, Data])
.config(routes);
