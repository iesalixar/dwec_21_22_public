// Realiza un script que pida una cadena de texto (mediante input o prompt) y la muestre convirtiendo los caracteres en
// mayúscula o minúscula de manera completamente aleatoria, y, además, entre carácter y carácter, imprima un guión, y
// además elimine todos los espacios posibles (internos y externos).

// Por ejemplo:
// "Si quiere vivir, venga conmigo"
// "s-I-q-U-I-e-r-e-v-I-v-I-R-,-V-e-N-G-a-c-O-N-m-i-G-O"

let ejemplo = "Si quiere vivir, venga conmigo";
let convertido = "";

window.onload = {
  convertir();
}

function convertir() {
  let cadena = prompt("Introduzca una frase concreta: ", ejemplo);
  document.getElementById("original").innerHTML = cadena;
  document.getElementById("transformada").innerHTML = transformar(cadena);
}

function transformar(cadena) {
  for (let i = 0; i < cadena.length; i++) {
    let mayus_or_not = Math.floor(Math.random() * 2 + 1);

    if (cadena[i] === " ") {
      continue;
    }

    if (mayus_or_not === 1) {
      convertido += cadena[i].toLowerCase();
    } else {
      convertido += cadena[i].toUpperCase();
    }

    if (i < cadena.length - 1) {
      convertido += "-";
    }
  }

  return convertido;
}
