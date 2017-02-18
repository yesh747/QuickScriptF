'use strict';

angular.module('myApp.loginDoctor', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/loginDoctor', {
    templateUrl: 'loginDoctor/loginDoctor.html',
    controller: 'LoginDoctorCtrl'
  });
}])

.controller('LoginDoctorCtrl', ['$scope','$window', function($scope, $window) {

  $scope.doctor = {
    email: '',
    password: ''
  }

 $scope.login = function(){

 // Make request to server, and if doctor exists, return his info and login
   $window.location.href = "#!/patientsView";

 }



}]);
