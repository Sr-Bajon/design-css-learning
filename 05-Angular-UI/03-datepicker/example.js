angular.module('ui.bootstrap.demo', ['ngAnimate', 'ui.bootstrap'])
    .controller('DatepickerDemoCtrl', function ($scope) {
      var dateCtrl = this;

      var formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate', 'dd-MM-yyyy'];

      dateCtrl.picker = {
        value: new Date(),
        format: formats[4],
        mindDate: new Date(1900, 0, 1),
        maxDate: new Date(),
        dateOptions: {
          startingDay: 1
        },
        opened: false,
        open: function ($event) {
          dateCtrl.picker.opened = true;
        }
      };

    });


/*
Pensamientos homicidas:
  parece que datepicker de angular-ui-bootstrap tiene dos tipos de parametros:
  unos que hay que interpolar en el html y que serían los que pueden cambiar en
    tiempo de ejecución
  y otros que aunque hay que poner el atributo en el elemento que tenga la
    directiva no hay que interpolarlos, sino definirlos en el controlador.

  Porque se ha hecho asi esto escapa a mi entendimiento, espero que no sea la
    norma esto.
 */
