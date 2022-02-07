// Un arquitecto de dudosa entereza moral, pretende vender parcelas comisionando a acaudalados incautos. En la base
// de datos del arquitecto, las parcelas y sus compradores están codificadas de la siguiente manera:

// municipio:cod_parcela@nombre|apellido1|apellido2

// Donde municipio es el municipio al que pertenece la parcela, cod_parcela es el código catastral de la parcela
// compuesto de 4 letras y 4 números, nombre es el nombre del comprador, apellido1 su primer apellido y apellido2 el segundo.
// Elabora el código en JavaScript para obtener por separado el municipio, la parcela (dividido el código en las letras
// y los números correspondientes), el nombre, y los apellidos (los dos juntos y en una única línea). Cada uno debe
// presentarse en un elemento (p o div, como quieras) de HTML.

let ejemplo = "Cádiz:ABCD1234@Ronaldihno|Perestroiko|Sicuéllanos";

separar(ejemplo);

function separar(cad) {
  let parte1 = cad.split(":");
  let municipio = parte1[0];
  let parte2 = parte1[1].split("@");
  let codigo_parcela_letras = parte2[0].substring(0, 4);
  let codigo_parcela_numeros = parte2[0].substring(4, 8);
  let parte3 = parte2[1].split("|");
  let nombre = parte3[0];
  let apellido1 = parte3[1];
  let apellido2 = parte3[2];

  document.getElementById("municipio").innerHTML = municipio;
  document.getElementById(
    "codigo_parcela_letras"
  ).innerHTML = codigo_parcela_letras;
  document.getElementById(
    "codigo_parcela_numeros"
  ).innerHTML = codigo_parcela_numeros;
  document.getElementById("nombre").innerHTML = nombre;
  document.getElementById("apellido1").innerHTML = apellido1;
  document.getElementById("apellido2").innerHTML = apellido2;
}
