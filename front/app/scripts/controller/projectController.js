angular.module('koya').controller('projectController', ['$scope','$state', '$stateParams','$http',
  function($scope, $state, $stateParams, $http) {
    $scope.aceOptions = {
      theme: 'textmate',
      mode: 'r',
      useWrapMode: true,
      workerPath: '/styles/'
    }
    $scope.id = $state.params.id;
    console.log($scope.id);
    if($scope.id!="undefined")
    $http.get("http://localhost:8082/rest/api/v1/projects/"+$scope.id+"/files/"+$scope.id)
    .success(function(data) {
                $scope.projects = data;
                console.log($scope.projects);
    });
    $scope.example = 'require(rCharts)\nrPlot(mpg ~ wt, data = mtcars,type = "point")';
    $scope.alertData = function(){
      console.log($scope.example);
    };
  }
]);
