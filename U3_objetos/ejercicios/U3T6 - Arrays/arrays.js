// Vamos a gestionar una lista de países haciendo uso de Arrays. Para ello necesitarás crear un
// archivo arrays.js que incluya las siguientes funciones:

// Mostrar el número de elementos del array.
// Mostrar todos los elementos del array.
// Muestra los elementos del array en sentido inverso.
// Muestra los elementos del array ordenados alfabéticamente (pero no los ordena).
// Añadir un elemento al principio del array.
// Añadir un elemento al final del array.
// Borrar un elemento al principio del array (y decir cuál se ha borrado).
// Borrar un elemento al final del array (y decir cuál se ha borrado).
// Muestra el elemento que se encuentra en una posición que el usuario indica.
// Muestra la posición en la que se encuentra un elemento que le indica el usuario.
// Muestra los elementos que se encuentran en un intervalo que el usuario indica.

var lista = ["España", "Portugal", "Suiza", "Italia"];
var opcion = prompt(
  "1 Mostrar número de paises. \n" +
    "2 Mostrar listado de paises \n" +
    "3 Mostrar un intervalo de paises \n" +
    "4 Añadir un país \n" +
    "5 Borrar un país \n" +
    "6 Consultar un país \n\n Introduce una opción:"
);

switch (opcion) {
  case "1":
    mostrar_numero_paises(lista);
    break;
  case "2":
    listar_paises(lista);
    break;
  case "3":
    intervalo_paises(lista);
    break;
  case "4": {
    anadir_pais(lista);
    break;
  }
  case "5": {
    borrar_pais(lista);
    break;
  }
  case "6": {
    consultar_pais(lista);
    break;
  }
  default:
    document.write("No se ha seleccionado ninguna opción, vuelve a recargar la página.");
}

function mostrar_numero_paises(array) {
  document.write("El tamaño del array es: " + array.length);
}

function listar_paises(array) {
  var opcion = prompt(
    "1 Mostrar en el orden que está. \n2 Mostrar ordenado \n3 Mostrar en orden inverso \n Introduce una opción:"
  );
  switch (opcion) {
    case "1":
      document.write("<br>" + array.toString());
      break;
    case "2":
      document.write("<br>" + array.sort());
      break;
    case "3":
      let array_aux = [...array];
      document.write("<br>" + array_aux.reverse());
      // array.reverse();
      console.log(array.toString());
      break;
    default:
      document.write("No se ha seleccionado ninguna opcion");
  }
}

function intervalo_paises(array) {
  let inicio = prompt("Indica la primera posición del intervalo");
  let fin = prompt("Indica la ultima posición del intervalo");

  while (inicio > fin || fin > array.length) {
    inicio = prompt("Indica la primera posición del intervalo");
    fin = prompt("Indica la ultima posición del intervalo");
  }

  document.write("El array del intervalo " + inicio + "-" + fin + " es:");

  for (i = inicio; i < fin; i++) {
    document.write("<br> " + array[i]);
  }
}

function anadir_pais(array) {
  let opcion = prompt("1 Al principio. \n2 Al final \n Introduce una opción:");
  let elemento = prompt("Introduce el país a añadir");

  switch (opcion) {
    case "1":
      array.unshift(elemento);
      document.write("Elemento añadido al principio:<br>");
      document.write("<br>" + array.toString());
      break;
    case "2":
      array.push(elemento);
      document.write("Elemento añadido al final:<br>");
      document.write("<br>" + array.toString());
      break;

    default:
      document.write("No se ha seleccionado ninguna opcion");
  }
}

function borrar_pais(array) {
  let opcion = prompt("1 Al principio. \n2 Al final \n Introduce una opción:");
  let elem;

  switch (opcion) {
    case "1":
      elem = array.shift();
      document.write("Elemento borrado al principio:" + elem);
      document.write("<br>" + array.toString());
      break;
    case "2":
      elem = array.pop();
      document.write("Elemento borrado al final:" + elem);
      document.write("<br>" + array.toString());
      break;

    default:
      document.write("No se ha seleccionado ninguna opción");
  }
}

function consultar_pais(array) {
  let opcion = prompt("1 Por posición. \n2 Por nombre \n Introduce una opción:");
  let elem;

  switch (opcion) {
    case "1":
      var pos = prompt("Introduzca la posición");
      elem = array[pos];
      document.write("Elemento consultado:" + elem);
      break;
    case "2":
      var elemento = prompt("Indica el elemento cuya posición vamos a mostrar");
      let indice = array.indexOf(elemento);
      if (indice > 0) {
        document.write("<br> La posición es: " + indice);
        document.write("<br> Y el pais es: " + array[indice]);
      }
      break;

    default:
      document.write("No se ha seleccionado ninguna opción");
  }
}
