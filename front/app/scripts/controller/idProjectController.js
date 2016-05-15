angular.module('koya').controller('idProjectController', ['$scope','$state', '$stateParams','$http',
function($scope, $state, $stateParams,$http) {
  debugger;
  $scope.id = $stateParams.id;

  $scope.loading = true;
  console.log($scope.id);

  if(!isNaN(parseFloat($scope.id)) && isFinite($scope.id)){
    $http.get("http://10.55.33.56:8082/rest/api/v1/project/"+$stateParams.id)
    .success(function(data) {
                $scope.project = data;
                $scope.loading = false;
                console.log($scope.project);
    });
  }
}]);
