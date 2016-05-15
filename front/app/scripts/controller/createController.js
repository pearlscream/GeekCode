angular.module('koya').controller('createController', ['$scope', '$http',
  function($scope, $http) {
        $scope.user = {};
        // calling our submit function.
        $scope.submitForm = function() {
          $scope.projects = {};
          $scope.projects.id = 0;
          $scope.projects.gitRepo = $scope.user.git;
          $scope.projects.imageFile = $scope.user.img;
          $scope.projects.need = $scope.user.need;

          if($('#new').is(':checked')) {$scope.projects.new = true;}
          else{$scope.projects.new =false;}
          $scope.projects.views = 1;
          $scope.projects.tasks = null;
          $scope.projects.users = null;
          $scope.projects.title = $scope.user.title;
          $scope.projects.description = $scope.user.description;
          // Posting data to php file
          console.log($scope.projects);
          $http({
              method: 'POST',
              url: 'http://10.55.33.56:8082/rest/api/v1/project/',
              data: $scope.projects, //forms user object
              headers: {
                'Content-Type': 'application/json'
              }
            })
            .success(function(data) {
              console.log(data);
            });
        };

  }
]);
