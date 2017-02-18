'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.patientsView',
  'myApp.addPatientView',
  'myApp.addPrescriptionView',
  'myApp.pharmacyView',
  'myApp.loginDoctor',
  'myApp.version',
  'ngMaterial',
  'ngAria',
  'ngAnimate'
]).
config(['$locationProvider', '$routeProvider', '$mdThemingProvider', function($locationProvider, $routeProvider, $mdThemingProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/patientsView'});
  $mdThemingProvider.theme('default')
    .primaryPalette('light-blue')
    .accentPalette('blue-grey');
}])
    // .constant('SERVER_HOST','https://dreamrun.herokuapp.com/')
    .constant('SERVER_HOST','http://127.0.0.1:5000/');
    // .constant('SERVER_HOST','http://localhost:5000/');

