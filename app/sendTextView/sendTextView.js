'use strict';

angular.module('myApp.addPatientView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/addPatientView', {
    templateUrl: 'addPatientView/addPatientView.html',
    controller: 'AddPatientViewCtrl'
  });
}])

.controller('AddPatientViewCtrl', ['$scope', '$rootScope','$http', 'SERVER_HOST', '$location', function($scope, $rootScope, $http, SERVER_HOST, $location) {

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
    // Get patient data
    $rootScope.newPatient = {
      name: $scope.patient.firstName + " " + $scope.patient.lastName,
      address: $scope.patient.address,
      email: $scope.patient.email,
      phoneNumber: $scope.patient.phone,
      ssn: $scope.patient.ssn.toString(),
      dob: $scope.patient.birthDate.toString(),
      doctor: $rootScope.doctorInformation.name,
    }

    // + Add new patient to database
    $http.post(SERVER_HOST+'addPatientView', $rootScope.newPatient).
    then(function (res) {
      console.log(res);
      // Choose route
      if ($scope.data.cb1 == true) {
        $rootScope.clickedPatient = $rootScope.newPatient;
        $rootScope.newPatient = null;
        $location.path('/addPrescriptionView');
      } else {
        $rootScope.newPatient = null;
        $location.path('/patientsView');
      }
    }, function (res) {
      console.log(res);
      console.log('error');
    })
  }


}]);
