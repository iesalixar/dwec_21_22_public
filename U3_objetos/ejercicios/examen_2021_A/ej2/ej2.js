// Realiza una página que contenga una función JavaScript para hacer estadísticas sobre una cadena de texto que se le
// pase, contando el número de veces que aparece cada letra. Utilizar un Array para almacenar la información estadística.
0123456;
let letras = "ABCDEFGHIJLKMNÑOPQRSTUVWXYZ";
let ejemplo = "Esto es una prueba de cadena generica para estadisticas";

estadistica(ejemplo);

function estadistica(frase) {
  frase = frase.toUpperCase();

  for (let j = 0; j < letras.length; j++) {
    console.log("");
    contador = 0;
    for (let k = 0; k < frase.length; k++) {
      if (letras[j] == frase[k]) {
        contador++;
      }
    }
    v[i] = contador;
  }

  let v = new Array();
  for (i = 0; i < letras.length; i++) {
    v[i] = 0;
  }

  for (i = 0; i < frase.length; i++) {
    v[letras.indexOf(frase.charAt(i))]++;
  }

  for (i = 0; i < letras.length; i++) {
    let linea = letras.charAt(i) + ": " + v[i] + "<br>";
    document.write(linea);
  }
}
