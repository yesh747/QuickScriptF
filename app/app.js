'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.patientsView',
  'myApp.addPatientView',
  'myApp.addPrescriptionView',
  'myApp.version',
  'ngMaterial',
  'ngAria',
  'ngAnimate'
]).
config(['$locationProvider', '$routeProvider', '$mdThemingProvider', '$stateProvider' function($locationProvider, $routeProvider, $mdThemingProvider, $stateProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/patientsView'});
  $mdThemingProvider.theme('default')
    .primaryPalette('light-blue')
    .accentPalette('blue-grey');
}])
