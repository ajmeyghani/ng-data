/* add bind polyfill for phantom only on testing */
ON_TEST && require('polyfill-function-prototype-bind');

/* libraries */
var angular = require('angular');
require('./lib/selector/index.es'); // just for fun.

/* init ng */
var ngMod = angular.module('myapp', [require('angular-ui-router')])

/* load mocks only for testing */
ON_TEST && require('angular-mocks/angular-mocks');

/* load components */
require('./router/index.es')(ngMod);
require('./posts/posts.components.es')(ngMod);
