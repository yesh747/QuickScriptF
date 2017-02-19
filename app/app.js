'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.patientsView',
  'myApp.addPatientView',
  'myApp.addPrescriptionView',
  'myApp.pharmacyView',
  'myApp.loginDoctor',
  'myApp.signUpDoctor',
  'myApp.version',
  'ngMaterial',
  'ngAria',
  'ngAnimate'
]).
config(['$locationProvider', '$routeProvider', '$mdThemingProvider', '$mdIconProvider', function($locationProvider, $routeProvider, $mdThemingProvider, $mdIconProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/login'});
  $mdThemingProvider.theme('default')
    .primaryPalette('light-blue')
    .accentPalette('blue-grey');
  $mdIconProvider.iconSet("call", 'img/icons/sets/communication-icons.svg', 24)
      .iconSet("social", 'img/icons/sets/social-icons.svg', 24);
}])

    // .constant('SERVER_HOST','https://dreamrun.herokuapp.com/')
    .constant('SERVER_HOST','http://10.189.24.35:5000/')
    //.constant('SERVER_HOST','http://127.0.0.1:5000/');
    // .constant('SERVER_HOST','http://localhost:5000/');
    .controller('BasicDemoCtrl', [ '$mdDialog', function DemoCtrl($mdDialog) {
    var originatorEv;

    this.openMenu = function($mdMenu, ev) {
      originatorEv = ev;
      $mdMenu.open(ev);
    };

  }]);
