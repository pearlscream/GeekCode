(function () {
  'use strict';

  var footerDirectiveFactory = function () {
    return {
      scope: false,
      restrict: 'E',
      templateUrl: 'views/partial/FooterDirective.html'
    };
  };

  angular.module('koya').directive('auctionFooter', footerDirectiveFactory);
}());
