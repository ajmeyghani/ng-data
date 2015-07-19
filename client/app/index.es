/* libraries */
var angular = require('angular');
require('./lib/selector/index.es'); // just for fun.

/* init ng */
var ngMod = angular.module('myapp', [require('angular-ui-router')])

/* load components */
require('./router/index.es')(ngMod);
require('./posts/posts.components.es')(ngMod);
