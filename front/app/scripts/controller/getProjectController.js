angular.module('koya').controller('getProjectController', ['$scope','$http', '$routeParams',
function($scope, $routeParams, $routeParams) {
  $scope.ProductId = $routeParams.id;
  console.log($scope.ProductId);
  /*$http.get("http://10.55.33.56:8082/rest/api/v1/project/1")
  .success(function(data) {
              $scope.projects = data;
              console.log($scope.projects);
  });*/
}]);
