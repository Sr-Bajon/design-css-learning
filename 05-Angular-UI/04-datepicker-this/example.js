angular.module('ui.bootstrap.demo', ['ngAnimate', 'ui.bootstrap'])
    .controller('DatepickerDemoCtrl', [function () {
      var dateCtrl = this;

      dateCtrl.dt = {};

      dateCtrl.dt.value = new Date();


      dateCtrl.dt.minDate = new Date(1900, 0, 1);
      dateCtrl.dt.maxDate = new Date();
      dateCtrl.dt.options = {
        isOpen: false,
        clearText: 'Limpiar',
        closeText: 'Cerrar',
        showButtonBar: false,
        uibDatepickerPopup: 'dd-mm-yyyy'
      };

      dateCtrl.saludo = 'Hola';

      dateCtrl.dt.open = function ($event) {
        dateCtrl.dt.options.isOpen = 'true';
      };

      dateCtrl.dt.dateOptions = {
        startingDay: 1
      };
    }]);
