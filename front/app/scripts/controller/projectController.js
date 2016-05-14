angular.module('koya').controller('projectController', ['$scope',
  function($scope) {
    $scope.aceOptions = {
      theme: 'textmate',
      mode: 'r',
      useWrapMode: true,
      workerPath: '/styles/'
    }
    $scope.example = 'require(rCharts)\nrPlot(mpg ~ wt, data = mtcars,type = "point")';
  }
]);
