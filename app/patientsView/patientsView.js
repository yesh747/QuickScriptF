'use strict';

angular.module('myApp.patientsView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/patientsView', {
    templateUrl: 'patientsView/patientsView.html',
    controller: 'PatientsViewCtrl'
  });
}])

.controller('PatientsViewCtrl', ['$scope', '$http', 'SERVER_HOST', '$window', '$rootScope', function($scope, $http, SERVER_HOST, $window, $rootScope) {

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

    $scope.selectedPatientId = $rootScope.doctorPatientInformation[position].id;
    console.log('Selected Patient Id: ' + $scope.selectedPatientId);

    $scope.drugs = $rootScope.doctorPatientInformation[position].prescriptions;
    console.log('Patient Drugs: ' + $scope.drugs);

  }

  $scope.goBackToPatientList = function(){
    $scope.drugs = null;
    $scope.selectedPatientName = null;
  }

  $scope.textPatient= function() {
    $http.post(SERVER_HOST + 'sms', {id: $scope.selectedPatientId})
        .then( function(res) {
          console.log('works: ' + JSON.stringify(res))
          },
          function(res){
            console.log('error: ' + res);
          }
        )
  };


}]);
