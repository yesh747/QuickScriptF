'use strict';

angular.module('myApp.signUpDoctor', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/signUpDoctor', {
    templateUrl: 'signUpDoctor/signUpDoctor.html',
    controller: 'SignUpDoctorCtrl'
  });
}])

.controller('SignUpDoctorCtrl', ['$scope','$window','$rootScope','$http','SERVER_HOST', function($scope, $window, $rootScope, $http, SERVER_HOST) {

 $scope.signUp = function(){

  // Get doctor info from form
  $scope.newDoctor = {
   name: $scope.doctor.firstName + " " + $scope.doctor.lastName,
   email: $scope.doctor.email,
   address: $scope.doctor.address,
   practiceName: $scope.doctor.practiceName,
   specialty: $scope.doctor.specialty,
   password: $scope.doctor.password,
  }

  // Make request to server, and if doctor exists, return his info and login
  // $http.post(SERVER_HOST+'loginDoctor', {email: 'a@b.com', password: 'ab'}).
   $http.post(SERVER_HOST+'addDoctorView', $scope.newDoctor).
   then(function (res) {
     console.log(res);
     if (res.data == "Doctor added") {
       $window.location.href = "#!/loginDoctor";
     } else {
        $scope.error = "Sorry, try again.";
     }
   }, function (res) {
     console.log(res);
     console.log('error');
   });


   // DUMMY DATA
   // $rootScope.doctorInformation = {
   //   name: 'Chris Turk'
   // }
	 //
   // $rootScope.doctorPatientInformation = [
   //   {name: 'patient 1', dob: 'dob1', address: 'address1', ssn: '1111', drugs: [{name: 'drug1', dose: 'dose1'}, {name: 'drug2', dose:'dose2'}]},
   //   {name: 'patient 2', dob: 'dob2', address: 'address2', ssn: '2222', drugs: [{name: 'drug3', dose: 'dose3'}, {name: 'drug4', dose:'dose4'}]},
   //   {name: 'patient 3', dob: 'dob3', address: 'address2', ssn: '3333', drugs: [{name: 'drug5', dose: 'dose5'}, {name: 'drug6', dose:'dose6'}]}
   // ]



 }



}]);
