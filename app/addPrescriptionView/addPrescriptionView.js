'use strict';

angular.module('myApp.addPrescriptionView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/addPrescriptionView', {
      templateUrl: 'addPrescriptionView/addPrescriptionView.html',
      controller: 'AddPrescriptionViewCtrl'
    });
}])

.controller('AddPrescriptionViewCtrl', ['$scope', '$rootScope', '$location','$http','SERVER_HOST', '$window', function($scope, $rootScope, $location, $http, SERVER_HOST, $window) {

  $scope.addPrescription = function() {

    // Set values
    $scope.newPrescription = {
      patient: $rootScope.clickedPatient.name,
      patient_id: $rootScope.clickedPatient.id,
      doctor: $rootScope.doctorInformation.name,
      doctor_id: $rootScope.doctorInformation.id,
      drugName: $scope.prescription.name,
      dosage: $scope.prescription.dosage,
      dosagePeriod: $scope.prescription.schedule,
      dosageNumber: $scope.prescription.number,
      totalNumDoses: $scope.prescription.totalNumDoses,
      timeOfDay: $scope.prescription.time,
      numDays: $scope.prescription.numDays,
      pharmacyFilled: false,
      dateFilled: null,
    }

    $http.post(SERVER_HOST+'addPrescriptionView', $scope.newPrescription).
    then(function (res) {
      console.log(res);
      if (res.data == "Prescription added") {
        $window.location.href = "#!/patientsView";
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

  // Get drugs, schedules, and times for form selectors
  $scope.drugList = ('Xanax Nexium Viagra OxyContin Miralax Vicodin Adderall Vyvanse Cialis').split(' ').map(function (drug) { return { name: drug }; });
  $scope.schedules = ['1', '2', '3', '4', '5', '6', '7'].map(function (sched) { return { schedule: sched }; });
   var times = ['Morning', 'Noon', 'Evening', 'Morning Noon', 'Noon Evening', 'Morning Evening', 'Morning Noon Evening'];
  // if ($scope.prescription.number > 1) $scope.times.push('Morning Noon', 'Noon Evening', 'Morning Evening');
  $scope.times = times.map(function (t) { return { time: t }; });
  $scope.pharmList = ['CVS', 'Walgreens', 'Walmart'].map(function (p) { return { pharmacy: p }; });

}]);
