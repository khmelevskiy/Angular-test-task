'use strict';

angular
  .module('app.shared.controllers.navBarCtrl', [])
  .controller('NavBarCtrl', NavBarCtrl);

function NavBarCtrl($rootScope, $scope) {
  $rootScope.$on('$stateChangeSuccess', (toParams, to) => {
    $scope.current = to.name;
  });
}
