'use strict';

angular.module('myApp.loginDoctor', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/loginDoctor', {
    templateUrl: 'loginDoctor/loginDoctor.html',
    controller: 'LoginDoctorCtrl'
  });
}])

.controller('LoginDoctorCtrl', ['$scope','$window','$rootScope', function($scope, $window, $rootScope) {

  $scope.doctor = {
    email: '',
    password: ''
  }

 $scope.login = function(){

 // Make request to server, and if doctor exists, return his info and login
   $window.location.href = "#!/patientsView";

   $rootScope.doctorPatientInformation = [
     {name: 'patient 1', dob: 'dob1', address: 'address1', ssn: '1111', drugs: [{name: 'drug1', dose: 'dose1'}, {name: 'drug2', dose:'dose2'}]},
     {name: 'patient 2', dob: 'dob2', address: 'address2', ssn: '2222', drugs: [{name: 'drug3', dose: 'dose3'}, {name: 'drug4', dose:'dose4'}]},
     {name: 'patient 3', dob: 'dob3', address: 'address2', ssn: '3333', drugs: [{name: 'drug5', dose: 'dose5'}, {name: 'drug6', dose:'dose6'}]}
   ]



 }



}]);
