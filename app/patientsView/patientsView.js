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
  console.log($scope.doctor);
  console.log($rootScope.doctorInformation);

  $scope.drugs;
  $scope.selectedPatient;

  $scope.goToPtDrugList = function(position) {
    console.log('Patients: ' + JSON.stringify($scope.patients));

    //Create an array of selected patient's drugs
    console.log('Entered Call Go To Pt Drug List. Position: ' + position);
    $scope.selectedPatientName = $rootScope.doctorPatientInformation[position].name;
    console.log('Selected Patient: ' + $scope.selectedPatientName);

    $scope.drugs = $rootScope.doctorPatientInformation[position].prescriptions;
    console.log('Patient Drugs: ' + $scope.drugs);

  }

  $scope.goBackToPatientList = function(){
    $scope.drugs = null;
    $scope.selectedPatientName = null;
  }

}]);
