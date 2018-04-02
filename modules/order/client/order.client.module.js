(function (app) {
  'use strict';

  app.registerModule('order', ['core']);
  app.registerModule('order.routes', ['ui.router', 'core.routes']);
}(ApplicationConfiguration));
