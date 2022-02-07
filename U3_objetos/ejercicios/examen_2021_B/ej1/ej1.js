// Crea un tipo de objetos que sirvan para representar Cartas. Estos objetos tendrán dos propiedades:
// -    palo. Que será un número de 1 a 4 (donde 1 significa Oros, 2 Copas, 3 Espadas y 4 bastos)
// -    valor. Un número del 1 al 10 (8 = sota, 9 = caballo, 10 = rey).

// Los objetos de este tipo se construyen indicando el palo y el valor. Si hay fallos en los datos
// se devuelve un objeto nulo en la creación.

// Las cartas tendrán estos métodos:
// -    darValor. Que recibe un número de palo y un valor para la carta para, con ellos, modificar
//      la carta. Ante datos incorrectos no cambia nada en la carta.
// -    toString. Método habitual (y estándar) para devoler en forma de texto entendible el valor de la carta.
//      Por ejemplo: As de Oros.

// Además, habrá otro tipo de objeto: Baraja. La idea es que represente una baraja de cartas españolas.
// Tendrá los siguientes detalles:
// -    La baraja la forman 40 cartas. Para ello tendrá la propiedad cartas que será un array de 40 cartas.
// -    Al construir la Baraja se rellenan las cartas en el siguiente orden: por palos y cada palo con
//      las cartas del 1 al 10. No se podrá acceder directamente al array fuera de la función constructura.
// -    El método barajar permite barajar las cartas. Es decir, desodernarlas de forma aleatoria.
// -    El método toString permite obtener la baraja en forma de texto para saber cómo están ordenadas
//      las cartas.

// Simula la construcción de una baraja muéstrala en un elemento HTML (p o div, como quieras), y luego
// muéstrala barajada en otro elemento.

let fournier = new Baraja();

window.onload = {
  mostrar_baraja();
}

function inicio() {
  document.getElementById("ordenada").innerHTML = fournier.toString();
  fournier.barajar();
  document.getElementById("barajada").innerHTML = fournier.toString();
}

function Carta(palo, valor) {
  if (palo < 1 || palo > 4 || valor < 1 || valor > 10) {
    return null;
  } else {
    this.palo = palo;
    this.valor = valor;
  }

  this.darValor = function (palo, valor) {
    if (!(palo < 1 || palo > 4 || valor < 1 || valor > 10)) {
      this.palo = palo;
      this.valor = valor;
    }
  };

  this.toString = function () {
    let txt = "";
    switch (valor) {
      case 1:
        txt += "As de ";
        break;
      case 2:
        txt += "Dos de ";
        break;
      case 3:
        txt += "Tres de ";
        break;
      case 4:
        txt += "Cuatro de ";
        break;
      case 5:
        txt += "Cinco de ";
        break;
      case 6:
        txt += "Seis de ";
        break;
      case 7:
        txt += "Siete de ";
        break;
      case 8:
        txt += "Sota de ";
        break;
      case 9:
        txt += "Caballo de ";
        break;
      case 10:
        txt += "Rey de ";
        break;
      default:
        break;
    }

    switch (palo) {
      case 1:
        txt += "Oros";
        break;
      case 2:
        txt += "Copas";
        break;
      case 3:
        txt += "Espadas";
        break;
      case 4:
        txt += "Bastos";
        break;
      default:
        break;
    }
    return txt;
  };
}

function Baraja() {
  this.cartas = [];

  let k = 0;
  for (let palo = 1; palo <= 4; palo++) {
    for (let valor = 1; valor <= 10; valor++) {
      this.cartas[k++] = new Carta(palo, valor);
    }
  }

  this.barajar = function () {
    let mazo_desordenado = [];
    let numeros_sacados = [];
    let contador = 0;
    while (contador < 40) {
      let nuevo_numero = parseInt(Math.random() * 40);
      if (numeros_sacados.includes(nuevo_numero)) {
        continue;
      }
      numeros_sacados[contador] = nuevo_numero;
      mazo_desordenado[contador] = this.cartas[nuevo_numero];
      contador++;
    }
    this.cartas = mazo_desordenado;
  };

  this.toString = function () {
    let txt = "";
    for (let i = 0; i < this.cartas.length; i++) {
      txt += this.cartas[i].toString() + "<br>";
    }
    return txt;
  };
}
