'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.patientsView',
  'myApp.addPatientView',
  'myApp.version',
  'ngMaterial',
  'ngAria',
  'ngAnimate'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/patientsView'});
}]);
