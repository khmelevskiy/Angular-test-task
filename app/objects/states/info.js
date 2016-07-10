'use strict';

angular
  .module('app.objects.states.info', ['app.objects.services'])
  .config(addRoute);

function addRoute($stateProvider) {
  $stateProvider
    .state('objects.info', {
      url: '/:id',
      controller: ObjectsInfoController,
      controllerAs: 'vm',
      templateUrl: 'objects/states/info.html'
    });
}

function ObjectsInfoController($scope, $stateParams, ObjectsService) {
  const index = $stateParams.id;

  $scope.instance = ObjectsService.get(index);
}
