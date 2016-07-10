'use strict';

angular
  .module('app.objects.states.list', ['app.objects.services'])
  .config(addRoute);

function addRoute($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('objects.list', {
      url: '/list',
      controller: ObjectsListController,
      templateUrl: 'objects/states/list.html'
    });

  $urlRouterProvider.otherwise('/objects/list');
}

function ObjectsListController($scope, ObjectsService) {
  $scope.collection = ObjectsService.getAll();
}
