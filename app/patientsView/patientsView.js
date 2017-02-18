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
    {name: 'patient 1', dob: 'dob1', address: 'address1', ssn: '1111', drugs: [{name: 'drug1', dose: 'dose1'}, {name: 'drug2', dose:'dose2'}]},
    {name: 'patient 2', dob: 'dob2', address: 'address2', ssn: '2222', drugs: [{name: 'drug3', dose: 'dose3'}, {name: 'drug4', dose:'dose4'}]},
    {name: 'patient 3', dob: 'dob3', address: 'address2', ssn: '3333', drugs: [{name: 'drug5', dose: 'dose5'}, {name: 'drug6', dose:'dose6'}]}
  ]

  $scope.drugs;
  $scope.selectedPatient;

  $scope.goToPtDrugList = function(position) {
    //Create an array of selected patient's drugs
    $scope.selectedPatient = $scope.patients[position].name;
    $scope.drugs = $scope.patients[position].drugs;
  }

  $scope.goBackToPatientList = function(){
    $scope.drugs = null;
    $scope.selectedPatient = null;
  }

}]);
