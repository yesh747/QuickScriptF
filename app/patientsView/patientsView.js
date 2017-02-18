'use strict';

angular.module('myApp.patientsView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/patientsView', {
    templateUrl: 'patientsView/patientsView.html',
    controller: 'PatientsViewCtrl'
  });
}])

.controller('PatientsViewCtrl', ['$scope', function($scope) {

  $scope.test = 'test works';

}]);