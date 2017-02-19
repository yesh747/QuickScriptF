'use strict';

angular.module('myApp.patientsView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/patientsView', {
    templateUrl: 'patientsView/patientsView.html',
    controller: 'PatientsViewCtrl'
  });
}])

.controller('PatientsViewCtrl', ['$scope', '$window', '$rootScope', function($scope, $window, $rootScope) {

  $scope.doctor = $rootScope.doctorInformation;

  $scope.drugs;
  $scope.selectedPatient;

  $scope.goToPtDrugList = function(position) {

    $rootScope.clickedPatient = $rootScope.doctorPatientInformation[position];

    //Create an array of selected patient's drugs
    $scope.selectedPatientName = $rootScope.doctorPatientInformation[position].name;
    console.log($scope.selectedPatientName);
    console.log('Selected Patient: ' + $scope.selectedPatientName);

    $scope.drugs = $rootScope.doctorPatientInformation[position].prescriptions;
    console.log('Patient Drugs: ' + $scope.drugs);

  }


  $scope.goBackToPatientList = function(){
    $scope.drugs = null;
    $scope.selectedPatientName = null;
  }

}]);
