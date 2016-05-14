var app=angular.module("koya",["ui.router"]);app.config(["$stateProvider","$urlRouterProvider",function(a,b){var c=function(a){return a+" | ITkoya"};b.when("","/blog.it-news"),a.state("blog",{url:"",templateUrl:"views/blog.html",controller:"blogController",title:c("Blog")}).state("blog.it-koya-news",{url:"/blog.it-koya-news",templateUrl:"views/blog/it-koya-news.html",controller:"itKoyaNewsController",title:c("ITkoya news")}).state("blog.it-news",{url:"/blog.it-news",templateUrl:"views/blog/it-news.html",controller:"itNewsController",title:c("IT news")}).state("blog.technology",{url:"/blog.technology",templateUrl:"views/blog/technology.html",controller:"technologyController",title:c("Technology")}).state("blog.projects",{url:"/blog.projects",templateUrl:"views/blog/projects.html",controller:"projectsController",title:c("Projects")}).state("help",{url:"/help",templateUrl:"views/help.html",controller:"helpController",title:c("Help")})}]),app.run(["$rootScope","$state","$stateParams",function(a){a.$on("$stateChangeStart",function(b,c,d,e,f){a.pageTitle=c.title})}]),angular.module("koya").controller("blogController",["$scope",function(a){a.templates=[{name:"template1.html",url:"views/blog/it-koya-news.html"},{name:"template2.html",url:"views/blog/it-news.html"}],a.template=a.templates[0]}]),function(){"use strict";var a=function(a){this.product=a};a.$inject=["product"],angular.module("koya").controller("ProductController",a)}(),function(){"use strict";var a=function(a){var b=this;b.products=[],a.find().then(function(a){b.products=a})};a.$inject=["ProductService"],angular.module("koya").controller("helpController",a)}(),function(){"use strict";var a=function(){return{scope:!1,restrict:"E",templateUrl:"views/partial/FooterDirective.html"}};angular.module("koya").directive("auctionFooter",a)}(),function(){"use strict";var a=function(){return{scope:!1,restrict:"E",templateUrl:"views/partial/NavbarDirective.html"}};angular.module("koya").directive("auctionNavbar",a)}();