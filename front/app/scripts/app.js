var app = angular.module('koya', ['ui.router']);

    app.config(function($stateProvider, $urlRouterProvider){
      var title = function (page) {
        return page + ' | KPIcoop';
    };
    $stateProvider
        /*project and children project elements*/
        .state('project', {
            url: "/project",
            templateUrl: 'views/project.html',
            controller: 'projectController',
            title: title('Project')
        })
        .state('main', {
            url: "/main",
            templateUrl: 'project.html',
            controller: 'projectController',
            title: title('Project')
        })

              /*.state('project.it-news', {
                  url: "/project.it-news",
                  templateUrl: 'views/project/it-news.html',
                  controller: 'itNewsController',
                  title: title('IT news')
              })
              .state('project.technology', {
                  url: "/project.technology",
                  templateUrl: 'views/project/technology.html',
                  controller: 'technologyController',
                  title: title('Technology')
              })
              .state('project.projects', {
                  url: "/project.projects",
                  templateUrl: 'views/project/projects.html',
                  controller: 'projectsController',
                  title: title('Projects')
              })
              */
        /*Help*/
        .state('profile', {
            url: "/profile",
            templateUrl: 'views/profile.html',
            controller: 'profileController',
            title: title('Profile')
        })
        .state('polyana', {
            url: "/polyana",
            templateUrl: 'views/polyana.html',
            controller: 'polyanaController',
            title: title('Polyana')
        })

    })

    app.run(['$rootScope','$state', '$stateParams', function ($rootScope) {
      $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
        $rootScope.pageTitle = toState.title;
      });
    }]);
