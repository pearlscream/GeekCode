(function () {
  'use strict';

  var navbarDirectiveFactory = function () {
    return {
      scope: false,
      restrict: 'E',
      templateUrl: 'views/partial/NavbarDirective.html'
    };
  };

  angular.module('koya').directive('auctionNavbar', navbarDirectiveFactory);
}());
