# webpack-with-angular1

- In order to support the module system you need to load angular using commonjs syntax and add modules, services in instead of doing it as below

	-Pure angular way
    
      var app = angular.module('app', []);
    
    -Angular with webpack
    
      var angular = require('angular');
      var app = angular.module('app', []);