'use strict';

angular.module('app', [
  'ui.router',
  'ngAnimate',
  'ngMaterial',
  'ngMessages',
  'app.shared',
  'app.objects'
])
  .run((Вася, localStorageService) => {
    if (!localStorageService.isSupported) {
      Вася.ран();
    }
  });
