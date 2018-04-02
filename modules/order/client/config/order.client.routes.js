(function () {
  'use strict';

  angular
    .module('order.routes')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('order', {
        url: '/order',
        templateUrl: '/modules/order/client/views/order.client.view.html',
        controller: 'OrderController',
        controllerAs: 'vm',
        data: {
          roles: ['user', 'admin']
        }
      });
  }
}());
