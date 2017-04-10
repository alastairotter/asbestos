var testApp = angular.module("testApp", []);


testApp.controller("mainController", ['$scope', '$http', function($scope, $http) {


  $http.get("gp_schools.json")

          .success( function(data) {

              $scope.schools = data;
              console.log(data);

          })
          .error( function (error, data) {
              console.log(error);
          })



}]);
