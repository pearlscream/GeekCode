angular.module('koya').controller('polyanaController', ['$scope','$http','$stateParams','$state',
function($scope, $http, $stateParams,$state) {
  $scope.id = $state.params.id;
  console.log($scope.id);
  $scope.loading = false;
    $scope.loading = true;
  $http.get("http://10.55.33.56:8082/rest/api/v1/project/")
  .success(function(data) {
              $scope.projects = data;
              $scope.loading = false;
              console.log($scope.projects);
  });

}]);
