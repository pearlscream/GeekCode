var app = angular.module('koya', ['ui.router']);

    app.config(function($stateProvider, $urlRouterProvider){
      var title = function (page) {
        return page + ' | ITkoya';
    };
    $urlRouterProvider.when('', '/blog.it-news');
    $stateProvider
        /*Blog and children blog elements*/
        .state('blog', {
            url: "",
            templateUrl: 'views/blog.html',
            controller: 'blogController',
            title: title('Blog')
        })
              .state('blog.it-koya-news', {
                  url: "/blog.it-koya-news",
                  templateUrl: 'views/blog/it-koya-news.html',
                  controller: 'itKoyaNewsController',
                  title: title('ITkoya news')
              })
              .state('blog.it-news', {
                  url: "/blog.it-news",
                  templateUrl: 'views/blog/it-news.html',
                  controller: 'itNewsController',
                  title: title('IT news')
              })
              .state('blog.technology', {
                  url: "/blog.technology",
                  templateUrl: 'views/blog/technology.html',
                  controller: 'technologyController',
                  title: title('Technology')
              })
              .state('blog.projects', {
                  url: "/blog.projects",
                  templateUrl: 'views/blog/projects.html',
                  controller: 'projectsController',
                  title: title('Projects')
              })
        /*Help*/
        .state('help', {
            url: "/help",
            templateUrl: 'views/help.html',
            controller: 'helpController',
            title: title('Help')
        })
    })

    app.run(['$rootScope','$state', '$stateParams', function ($rootScope) {
      $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
        $rootScope.pageTitle = toState.title;
      });
    }]);
