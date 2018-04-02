(function () {
  'use strict';

  angular
    .module('order')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(menuService) {
    // Set top bar menu items
    menuService.addMenuItem('topbar', {
      title: 'Order',
      state: 'order'
    });
  }
}());
