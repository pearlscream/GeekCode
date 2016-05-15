angular.module('koya').controller('idProjectController', ['$scope','$state', '$stateParams','$http',
function($scope, $state, $stateParams,$http) {
  $scope.id = $stateParams.id;
  if(!isNaN(parseFloat($scope.id)) && isFinite($scope.id)){
    $http.get("http://10.55.33.56:8082/rest/api/v1/project/"+$stateParams.id)
    .success(function(data) {
                $scope.projects = data;
                $scope.loading = false;
                console.log($scope.projects);
    });
  }
}]);
