'use strict';

angular.module('myApp.addPatientView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/addPatientView', {
    templateUrl: 'addPatientView/addPatientView.html',
    controller: 'AddPatientViewCtrl'
  });
}])

.controller('AddPatientViewCtrl', ['$scope', '$rootScope','SERVER_HOST', '$http', function($scope, $rootScope, $http, SERVER_HOST) {

  // Initialize $scope.data
  $scope.data = {};

  // // Check Box Logic

  // Initialize
  $scope.cb1Text = "Submit";
  $scope.data.cb1 = false;

  // Change text based on cb value
  $scope.updateText = function() {
    $scope.data.cb1 = !$scope.data.cb1;
    if ($scope.data.cb1 == true) {
      $scope.cb1Text = "Add Prescription";
    }
    if ($scope.data.cb1 == false) {
      $scope.cb1Text = "Submit";
    }
  }

  // // Form Handler
  $scope.submitForm = function() {



    $rootScope.newPatient = {
      name: $scope.patient.firstName + $scope.patient.lastName,
      address: $scope.patient.address,
      ssn: $scope.patient.ssn,
      doB: $scope.patient.birthDate
    }

  }

}]);
