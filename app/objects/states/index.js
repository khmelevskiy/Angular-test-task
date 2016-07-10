'use strict';

angular.module('app.objects.states', [
  'app.objects.states.list',
  'app.objects.states.new',
  'app.objects.states.info'
]).config(($stateProvider) => {
  $stateProvider
    .state('objects', {
      url: '/objects',
      abstract: true,
      template: '<ui-view flex="50" layout="row" layout-align="center"></ui-view>'
    });
});
