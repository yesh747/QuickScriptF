'use strict';

angular.module('myApp.pharmacyView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/pharmacyView', {
    templateUrl: 'pharmacyView/pharmacyView.html',
    controller: 'PharmacyViewCtrl'
  });
}])

.controller('PharmacyViewCtrl', ['$scope', '$window', '$rootScope', function($scope, $window, $rootScope) {

  $scope.pharmacy = {
    name: 'CVS Loyalville',
    address: '16 Loyalsock Rd. Loyalville, KY'
  }

  $scope.dateFilled = function(date) {
    console.log("called");
    if (date == null) {
      return "not filled";
    }
    else return date;
  }

  $scope.prescriptions = [
    {patient: 'patient 1', drug: 'Xanax', doctor: 'Dr. No', datePrescribed: '9/9/09', dateFilled: null },
    {patient: 'patient 2', drug: 'Xanax', doctor: 'Dr. No', datePrescribed: '9/9/09', dateFilled: '9/9/09' },
    {patient: 'patient 3', drug: 'Xanax', doctor: 'Dr. No', datePrescribed: '9/9/09', dateFilled: '9/9/09' }
  ]



  //$scope.patients = $rootScope.doctorPatientInformation;

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
