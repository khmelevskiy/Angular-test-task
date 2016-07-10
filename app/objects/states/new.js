'use strict';

angular
  .module('app.objects.states.new', ['app.objects.services'])
  .config(addRoute);

function addRoute($stateProvider) {
  $stateProvider
    .state('objects.new', {
      url: '/new',
      controller: ObjectsNewController,
      controllerAs: 'vm',
      templateUrl: 'objects/states/new.html'
    });
}

function ObjectsNewController($scope, $state, ObjectsService) {
  $scope.instance = {
    title: 'Человеческое, слишком человеческое',
    description: 'Автор: Фридрих Ницше',
    address: 'Вселенная',
    // category: 'Реализм',
    tags: ['психология', 'сверхчеловек']
  };

  this.categories = [
    'Реализм',
    'Фантастика',
    'Экзистенциализм'
  ];

  this.addObject = function addObject() {
    const instance = $scope.instance;
    ObjectsService.add(instance);
    $state.go('objects.list');
  };

  this.validateChip = function validateChip(chip) {
    if (!/^.*[а-я0-9a-z].*$/i.test(chip)) {
      return null;
    }

    return chip;
  };
}
