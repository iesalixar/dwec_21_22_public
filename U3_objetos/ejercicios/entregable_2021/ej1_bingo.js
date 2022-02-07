let numeros_sacados = [];
const lineas_carton = 3;
let carton = new Array(lineas_carton);
const numeros_por_linea_carton = 5;
let partida = document.getElementById("partida");
let resultados = document.getElementById("resultados");
let numeros = document.getElementById("numeros");
let div_carton = document.getElementById("carton");

window.onload = function () {
  inicio();
};

function inicio() {
  console.log("Este el comienzo de la ejecución");
}

function comenzar() {
  partida.innerHTML = "¡INICIO DE PARTIDA!";
  rellenarCarton(carton);
  sacaNumeroNuevo();
}

function sacaNumeroNuevo() {
  let nuevo_numero = 0;

  if (numeros_sacados.length === 99) {
    partida.innerHTML = "¡FIN DE PARTIDA!";
  } else {
    nuevo_numero = dame_aleatorio_nuevo(numeros_sacados);

    let resultado_linea = compruebaLinea(carton, numeros_sacados);
    if (resultado_linea !== -1) {
      resultados.innerHTML = "¡LINEA! (" + resultado_linea + ")";
    }

    if (compruebaBingo(carton, numeros_sacados)) {
      resultados.innerHTML = "¡BINGO!";
    }

    numeros.innerHTML += nuevo_numero + ", ";
    partida.innerHTML = "¡INICIO DE PARTIDA! números sacados - " + numeros_sacados.length;
  }
}

function rellenarCarton(carton) {
  div_carton.innerHTML = "";
  let numeros_sacados_carton = [];
  for (let i = 0; i < lineas_carton; i++) {
    carton[i] = [];
    for (let j = 0; j < numeros_por_linea_carton; j++) {
      carton[i][j] = dame_aleatorio_nuevo(numeros_sacados_carton);
    }
    div_carton.innerHTML += carton[i].toString() + "<br>";
  }
}

function compruebaLinea(carton, numeros_sacados) {
  let num_linea = -1;
  for (let i = 0; i < lineas_carton; i++) {
    let acierto_por_linea = 0;
    for (let j = 0; j < numeros_por_linea_carton; j++) {
      if (numeros_sacados.indexOf(carton[i][j]) !== -1) {
        acierto_por_linea++;
      }
    }
    if (acierto_por_linea === numeros_por_linea_carton) {
      num_linea = i;
    }
  }
  return num_linea;
}

function compruebaBingo(carton, numeros_sacados) {
  let es_bingo = false;
  let aciertos = 0;
  for (let i = 0; i < lineas_carton; i++) {
    for (let j = 0; j < numeros_por_linea_carton; j++) {
      if (numeros_sacados.indexOf(carton[i][j]) !== -1) {
        aciertos++;
      }
    }
  }
  if (aciertos === numeros_por_linea_carton * lineas_carton) {
    es_bingo = true;
  }
  return es_bingo;
}

function dame_aleatorio_nuevo(lista_sacados) {
  do {
    nuevo_numero = Math.floor(Math.random() * 99 + 1);
    ha_salido = false;
    for (i = 0; i < lista_sacados.length; i++) {
      let sacado = lista_sacados[i];
      if (nuevo_numero === sacado) {
        ha_salido = true;
      }
    }
  } while (ha_salido);
  lista_sacados.push(nuevo_numero);
  return nuevo_numero;
}
