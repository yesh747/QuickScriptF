'use strict';

angular.module('myApp.addPatientView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/addPatientView', {
    templateUrl: 'addPatientView/addPatientView.html',
    controller: 'AddPatientViewCtrl'
  });
}])

.controller('AddPatientViewCtrl', ['$scope', function($scope) {

}]);