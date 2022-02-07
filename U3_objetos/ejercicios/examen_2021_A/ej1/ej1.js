// La confitería “La Plata” en Los Barrios - Cádiz, elabora en su obrador una diversa gama de bollería fina.
// Los diferentes tipos de pasteles son:

// -   Caracolas (rellenas de crema o de chocolate)
// -   Tocinos de cielo (con o sin azúcar)
// -   Riñoncitos (de chocolate negro o blanco)
// -   Milhojas (de caramelo, de vainilla o de chocolate)

// Las bandejas de pasteles que salen, necesitan ser vendidos en un tiempo determinado, por lo que es necesario
// controlar el tiempo que pasa desde que se terminan de elaborar, hasta que son vendidos.

// Las bandejas se representan como una “clase” que tiene como propiedades las siguientes:
// -   Tipo de pastel
// -   Variedad de pastel
// -   Cantidad
// -   Hora de elaboración
// -   Hora de venta del último pastel.

// Y como métodos, los siguientes:
// -   Constructor: Recibe el tipo, variedad, cantidad de pasteles y la hora de salida.
// -   tiempo_venta: Que devuelve la diferencia en horas y minutos entre que salió la bandeja y que se vendió
//     el último pastel.

// Desarrolla la “clase” “LaPlata”, que contiene como propiedad, la siguiente:
// -   mostrador: Es un array de bandejas de pasteles recién salidas del horno. Hay como máximo una bandeja
// por tipo y variedad de pastel.

// Y como métodos los siguientes:
// -   poner_en_mostrador: Este método es llamado cada vez que se termina una bandeja y se pone en el mostrador.
// Recibe una bandeja de pasteles de algún de tipo y variedad de pastel. Por ejemplo, una bandeja con 15 caracolas
// de crema. Debe controlar que no se intente poner una bandeja de pasteles del mismo tipo y variedad que ya está.
// -   vender_pastel: Este método recibe la bandeja de la que se está realizando el pedido y la cantidad pasteles.
// Deberá comprobar que quedan pasteles en la bandeja, y si es el último, mostrar el tiempo que ha tardado en venderse
// la bandeja entera.

// Simula la venta de una bandeja completa y muéstrala en un elemento HTML (p o div, como quieras).

let Plata = new PasteleriaPlata();
let bandeja1 = new Bandeja("Caracola", "Crema", 15);
Plata.poner_en_mostrador(bandeja1);
let bandeja2 = new Bandeja("Tocinos de cielo", "Con azúcar", 20);
Plata.poner_en_mostrador(bandeja2);

function vender() {
  Plata.vender_pastel("Caracola", "Crema", 5);
  Plata.vender_pastel("Caracola", "Crema", 5);
  Plata.vender_pastel("Caracola", "Crema", 15);
  Plata.refrescar_mostrador();
}

function Bandeja(tipo, variedad, cantidad) {
  this.tipo = tipo;
  this.variedad = variedad;
  this.cantidad = cantidad;
  this.hora_elaboracion = new Date();
  this.hora_venta_ultimo = new Date();

  this.restar = function (cantidad) {
    if (this.cantidad >= cantidad) {
      this.cantidad -= cantidad;
    } else if (cantidad > this.cantidad) {
      this.cantidad = 0;
    }
  };

  function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  this.tiempo_venta = function () {
    let tiempo = new Date(this.hora_venta_ultimo - this.hora_elaboracion);
    resultado =
      addZero(tiempo.getHours() - 1) +
      ":" +
      addZero(tiempo.getMinutes()) +
      ":" +
      addZero(tiempo.getSeconds());
    return resultado;
  };

  this.toString = function () {
    return (
      this.tipo +
      " " +
      this.variedad +
      " " +
      this.cantidad +
      " " +
      this.hora_elaboracion.getHours() +
      ":" +
      this.hora_elaboracion.getMinutes() +
      ":" +
      this.hora_elaboracion.getSeconds() +
      " " +
      this.hora_venta_ultimo.getHours() +
      ":" +
      this.hora_venta_ultimo.getMinutes() +
      ":" +
      this.hora_venta_ultimo.getSeconds()
    );
  };
}

function PasteleriaPlata() {
  this.mostrador = [];

  this.refrescar_mostrador = function () {
    document.getElementById("mostrador").innerHTML = "";
    for (let i = 0; i < this.mostrador.length; i++) {
      document.getElementById("mostrador").innerHTML +=
        this.mostrador[i].toString() + "<br>";
    }
  };

  this.poner_en_mostrador = function (bandeja) {
    let puesta_mostrador = false;
    for (let i = 0; i < this.mostrador.length; i++) {
      if (
        this.mostrador[i].tipo === bandeja.tipo &&
        this.mostrador[i].variedad === bandeja.variedad
      ) {
        puesta_mostrador = true;
      }
    }

    if (!puesta_mostrador) {
      this.mostrador.push(bandeja);
      this.refrescar_mostrador();
    } else {
      document.getElementById("errores").innerHTML =
        "Ya hay una bandeja con ese tipo y variedad";
    }
  };

  this.vender_pastel = function (tipo, variedad, cantidad) {
    for (let i = 0; i < this.mostrador.length; i++) {
      if (
        this.mostrador[i].tipo === tipo &&
        this.mostrador[i].variedad === variedad &&
        this.mostrador[i].cantidad >= cantidad
      ) {
        this.mostrador[i].restar(cantidad);
        if (this.mostrador[i].cantidad === 0) {
          this.mostrador[i].hora_venta_ultimo = new Date();
          console.log("Último vendido en " + this.mostrador[i].tiempo_venta());
          this.refrescar_mostrador();
        }
      }
    }
  };
}
