angular.module('koya').controller('projectController', ['$scope',
function($scope) {
  $scope.templates =[
          { name: 'template1.html', url: 'views/blog/it-koya-news.html'},
          { name: 'template2.html', url: 'views/blog/it-news.html'}];
  $scope.template = $scope.templates[0];
}]);
