'use strict';

angular.module('myApp.addPrescriptionView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/addPrescriptionView', {
      templateUrl: 'addPrescriptionView/addPrescriptionView.html',
      controller: 'AddPrescriptionViewCtrl'
    });
}])

.controller('AddPrescriptionViewCtrl', ['$scope', '$rootScope', '$location','$http','SERVER_HOST', function($scope, $rootScope, $location, $http, SERVER_HOST) {

  $scope.addPrescription = function() {
    $scope.newPrescription = $scope.submitForm();
    $http.post(SERVER_HOST+'addPrescriptionView', $scope.newPrescription).
    then(function (res) {
      if (res == "Prescription added") {
        $window.location.href = "#!/addPrescriptionView";
      } else {
         $scope.error = "Sorry, try again.";
      }
    }, function (res) {
      console.log(res);
      console.log('error');
    });
  }
  // Go back if no patient selected
  // if ($rootScope.clickedPatient == null) $location.path('/patientsView');

  $rootScope.doctorInformation = {};
  $rootScope.doctorInformation.name = "Dr. No";

  // Get drugs, schedules, and times for form selectors
  $scope.drugList = ('Xanax Adderall Acetomenphan Belozik Frumuti Sedunkil').split(' ').map(function (drug) { return { name: drug }; });
  $scope.schedules = ['1', '2', '3', '4', '5', '6', '7'].map(function (sched) { return { schedule: sched }; });
   var times = ['Morning', 'Noon', 'Evening', 'Morning Noon', 'Noon Evening', 'Morning Evening', 'Morning Noon Evening'];
  // if ($scope.prescription.number > 1) $scope.times.push('Morning Noon', 'Noon Evening', 'Morning Evening');
  $scope.times = times.map(function (t) { return { time: t }; });
  $scope.pharmList = ['CVS', 'Walgreens', 'Walmart'].map(function (p) { return { pharmacy: p }; });


  // // Form Handler
  $scope.submitForm = function() {

  // Helpers

    $scope.today = function() {
      var date = new Date();
      var dd = someDate.getDate();
      var mm = someDate.getMonth() + 1;
      var y = someDate.getFullYear();
      var today = dd + '/'+ mm + '/'+ y;
      return today;
    }

    // Set values
    $scope.newPrescription = {
      patient: $rootScope.clickedPatient.name,
      doctor: $rootScope.doctorInformation.name,
      drug: $scope.prescription.name,
      dosage: $scope.prescription.dosage,
      dosagePeriod: $scope.prescription.schedule,
      dosageNumber: $scope.prescription.number,
      totalNumDoses: $scope.prescription.totalNumDoses,
      timeOfDay: $scope.prescription.time,
      numDays: $scope.prescription.numDays,
      datePrescribed: $scope.today(),
      pharmacyFilled: false,
      dateFilled: null,
    }
  }

  // + Submit the data to server

}]);
