import 'jquery';
import 'bootstrap-loader';
import 'mdi/css/materialdesignicons.min.css';

import angular from 'angular';
import nganimate from 'angular-animate';
import uirouter from 'angular-ui-router';

import './app.css';
import Routes from './app.config';
import RunFunction from './app.run';

import main from './main/main.module';
import home from './home/home.module';
import search from './home.search/search.module';
import results from './home.results/results.module';
import Data from './Data/Data.module';


angular.module('app', [nganimate, uirouter, main, home, search, results, Data])
.config(Routes)
.run(RunFunction);
