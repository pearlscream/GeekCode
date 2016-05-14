angular.module('koya').controller('polyanaController', ['$scope','$http',
function($scope, $http) {

  $http.get("http://10.55.33.56:8082/rest/api/v1/project/1")
  .success(function(data) {
              $scope.projects = data;
              console.log($scope.projects);
  });
}]);
