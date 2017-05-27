import angular from 'angular';

import './search.css';
import SearchController from './search.controller';

export default angular.module('search', [])
.controller('SearchController', SearchController)
.name;
