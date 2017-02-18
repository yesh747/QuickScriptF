'use strict';

angular.module('myApp.addPrescriptionView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/addPrescriptionView', {
    templateUrl: 'addPrescriptionView/addPrescriptionView.html',
    controller: 'AddPrescriptionViewCtrl'
  });
}])

.controller('AddPrescriptionViewCtrl', ['$scope', function($scope) {

  $scope.patient = "John";
  $scope.drugList = ('Xanax Adderall Acetomenphan Belozik Frumuti Sedunkil').split(' ').map(function (drug) { return { name: drug }; });
  $scope.schedules = ['Daily', 'Every other day', 'Once every three days', 'Once per week',
                      'MWF', 'TR'].map(function (sched) { return { schedule: sched }; });


}]);
