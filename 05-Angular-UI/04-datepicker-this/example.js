angular.module('ui.bootstrap.demo', ['ngAnimate', 'ui.bootstrap']);
angular.module('ui.bootstrap.demo').controller('DatepickerDemoCtrl', function ($scope) {
  var dateCtrl = this;

  dateCtrl.dt = new Date();

  dateCtrl.dt.minDate = new Date(1900, 0, 1);
  dateCtrl.dt.maxDate = new Date();
  dateCtrl.dt.opened = false;


  dateCtrl.open = function ($event) {
    dateCtrl.dt.opened = 'true';
  };

  dateCtrl.dt.dateOptions = {
    startingDay: 1
  };


});
