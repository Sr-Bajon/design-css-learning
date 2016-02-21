function isAJavascripter() {
  var arr = ['Javascript'];
  return !!~arr.indexOf('Javascript') ? 1 : ~1;
}

isAJavascripter();

/*
~  convierte el valor que se le pase en un numero, incluido un string
~'Hola'  = -1


La operacion que hace es cambiar el numero de signo y restarle 1
Seria el (numero * -1) -1

Con numeros si se le pasa un numero positivo
~1  = -2
~2  = -3

Con numeros negativos
~-1  = 0
~-2  = 1


Con dos ~~  obtenemos el numero igual
~~-1 = -1
~~2  =  2


 */

/*

  return !!~arr.indexOf('Javascript') ? 1 : ~1;

  Por partes

  arr.indexOf('Javascript')   =  0
  ~0                          =  -1  y -1 es true  Boolean(-1) = true
  !!-1                        =  true

  Por lo tanto el resultado es 1

 */
