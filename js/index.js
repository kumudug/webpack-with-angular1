var angular = require('angular');
var app = angular.module('app', []);

require('./bands')(app); //webpack will require the index.js file inside the bands folder