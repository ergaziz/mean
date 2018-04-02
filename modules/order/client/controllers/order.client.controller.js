(function () {
  'use strict';

  angular
    .module('order')
    .controller('OrderController', OrderController);

    OrderController.$inject = ['$scope', '$state', 'Authentication', 'Socket'];

  function OrderController($scope, $state, Authentication, Socket) {
    var vm = this;

    vm.messages = [];
    vm.messageText = '';
    vm.sendMessage = sendMessage;

    init();

    function init() {
      // If user is not signed in then redirect back home
      if (!Authentication.user) {
        $state.go('home');
      }

      // Make sure the Socket is connected
      if (!Socket.socket) {
        Socket.connect();
      }

      // Add an event listener to the 'orderMessage' event
      Socket.on('orderMessage', function (message) {
        vm.messages.unshift(message);
      });

      // Remove the event listener when the controller instance is destroyed
      $scope.$on('$destroy', function () {
        Socket.removeListener('orderMessage');
      });
    }

    // Create a controller method for sending messages
    function sendMessage() {
      // Create a new message object
      var message = {
        text: vm.messageText
      };

      // Emit a 'orderMessage' message event
      Socket.emit('orderMessage', message);

      // Clear the message text
      vm.messageText = '';
    }
  }
}());
