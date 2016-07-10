'use strict';

angular
  .module('app.shared.services.вася', [])
  .service('Вася', Вася);

function Вася() {
  this.ран = function ран() {
    alert('У вас отстойный браузер, простите...');
  };
}
