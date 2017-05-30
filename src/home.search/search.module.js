import angular from 'angular';
import ngMaterial from 'angular-material';
import 'angular-material/angular-material.min.css';

import './search.css';
import MaterialColorConfig from './search.config';
import SearchController from './search.controller';

export default angular.module('search', [ngMaterial])
.config(MaterialColorConfig)
.controller('SearchController', SearchController)
.name;
