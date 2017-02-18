'use strict';

angular.module('myApp.patientsView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/patientsView', {
    templateUrl: 'patientsView/patientsView.html',
    controller: 'PatientsViewCtrl'
  });
}])

.controller('PatientsViewCtrl', ['$scope', '$window', function($scope, $window) {


  $scope.doctor = {
    name: 'Chris Turk',
    practice: 'Sacred Heart Hospital'
  }

  $scope.patients = [
    {name: 'patient 1', dob: 'dob1'},
    {name: 'patient 2', dob: 'dob2'},
    {name: 'patient 3', dob: 'dob3'}
  ]

}]);