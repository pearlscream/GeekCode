(function () {
  'use strict';

  var helpController = function (productService) {
    var _this = this;
    _this.products = [];

    productService.find()
        .then(function (data) { _this.products = data; });
  };

  helpController.$inject = ['ProductService'];
  angular.module('koya').controller('helpController', helpController);
}());
