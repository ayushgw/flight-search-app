import 'jquery';
import 'bootstrap-loader';

import angular from 'angular';
import nganimate from 'angular-animate';
import uirouter from 'angular-ui-router';

import './app.css';
import Routes from './app.config';
import EnableUIRouterErrors from './app.run';

import main from './main/main.module';
import home from './home/home.module';
import results from './results/results.module';
import Data from './Data/Data.module';


angular.module('app', [nganimate, uirouter, main, home, results, Data])
.config(Routes)
.run(EnableUIRouterErrors);
