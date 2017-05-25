const angular = require('angular');

(function () {
  function dupaController() {
    const vm = this;
    vm.test = 'test';
    vm.test2 = 'test dupy';
    vm.test3 = 'test dupy';
  }

  dupaController.$inject = [];

  angular.module('app').component('testComponent', {
    templateUrl: './src/entries/testComponent/testComponent.html',
    controllerAs: 'vm',
    bindings: {
      data: '<',
    },
    controller: dupaController,
  });
}());
