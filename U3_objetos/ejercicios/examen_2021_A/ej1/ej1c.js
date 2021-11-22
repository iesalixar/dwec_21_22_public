// La confitería “La Plata” en Los Barrios - Cádiz, elabora en su obrador
// una diversa gama de bollería fina.
// Los diferentes tipos de pasteles son:

// -   Caracolas (rellenas de crema o de chocolate)
// -   Tocinos de cielo (con o sin azúcar)
// -   Riñoncitos (de chocolate negro o blanco)
// -   Milhojas (de caramelo, de vainilla o de chocolate)

// Las bandejas de pasteles que salen, necesitan ser vendidos en un tiempo determinado,
// por lo que es necesario  controlar el tiempo que pasa desde que se terminan
// de elaborar, hasta que son vendidos.

// Las bandejas se representan como una “clase” que tiene como propiedades
// las siguientes:
// -   Tipo de pastel
// -   Variedad de pastel
// -   Cantidad
// -   Hora de elaboración
// -   Hora de venta del último pastel.

// Y como métodos, los siguientes:
// -   Constructor: Recibe el tipo, variedad, cantidad de pasteles y la hora de salida.
// -   tiempo_venta: Que devuelve la diferencia en horas y minutos entre que salió
//     la bandeja y que se vendió el último pastel.

// Desarrolla la “clase” “LaPlata”, que contiene como propiedad, la siguiente:
// -   mostrador: Es un array de bandejas de pasteles recién salidas del horno.
// Hay como máximo una bandeja por tipo y variedad de pastel.

// Y como métodos los siguientes:
// -   poner_en_mostrador: Este método es llamado cada vez que se termina una
//     bandeja y se pone en el mostrador.
//     Recibe una bandeja de pasteles de algún de tipo y variedad de pastel.
//     Por ejemplo, una bandeja con 15 caracolas de crema.
//     Debe controlar que no se intente poner una bandeja de pasteles del mismo tipo y
//     variedad que ya está.
// -   vender_pastel: Este método recibe la bandeja de la que se está realizando
//     el pedido y la cantidad pasteles.
//     Deberá comprobar que quedan pasteles en la bandeja, y si es el último,
//     mostrar el tiempo que ha tardado en venderse la bandeja entera.

// Simula la venta de una bandeja completa y muéstrala en un elemento HTML
// (p o div, como quieras).

class Bandeja {
  constructor(tipo, variedad, cantidad, hora_elaboracion) {
    this._tipo = tipo;
    this._variedad = variedad;
    this._cantidad = cantidad;
    this._hora_elaboracion = hora_elaboracion;
    this._hora_venta_ultimo = new Date();
  }

  get tipo() {
    return this._tipo;
  }

  get variedad() {
    return this._variedad;
  }

  get cantidad() {
    return this._cantidad;
  }

  set hora_venta_ultimo(venta_ultimo) {
    this._hora_venta_ultimo = venta_ultimo;
  }

  get hora_venta_ultimo() {
    return this._hora_venta_ultimo;
  }

  tiempo_venta() {
    //
    // console.log("tiempo_venta")
    console.log(this._hora_venta_ultimo);
    console.log(this._hora_elaboracion);
    console.log(this._hora_venta_ultimo - this._hora_elaboracion);
    return new Date(this._hora_venta_ultimo - this._hora_elaboracion);
  }

  restar(cantidad) {
    if (this._cantidad - cantidad >= 0) {
      this._cantidad -= cantidad;
    }
  }

  // HH:MM:SS

  toString() {
    let resultado =
      this._tipo +
      " " +
      this._variedad +
      " " +
      this._cantidad +
      " " +
      this._hora_elaboracion.getHours() +
      ":" +
      this._hora_elaboracion.getMinutes() +
      ":" +
      this._hora_elaboracion.getSeconds() +
      " - " +
      this._hora_venta_ultimo.getHours() +
      ":" +
      this._hora_venta_ultimo.getMinutes() +
      ":" +
      this._hora_venta_ultimo.getSeconds();

    return resultado;
  }
}

class LaPlata {
  constructor() {
    this._mostrador = [];
  }

  poner_en_mostrador(bandeja) {
    if (this._mostrador.length !== 0) {
      for (let i = 0; i < this._mostrador.length; i++) {
        if (this._mostrador[i].tipo === bandeja.tipo && this._mostrador[i].variedad === bandeja.variedad) {
          console.log("Error, bandeja del mismo tipo y variedad de pasteles");
        } else {
          this._mostrador.push(bandeja);
          console.log("Inserto ", bandeja.tipo);
          break;
        }
      }
    } else {
      this._mostrador.push(bandeja);
      console.log("Inserto ", bandeja.tipo);
    }
  }

  vender_pastel(tipo, variedad, cantidad) {
    for (let i = 0; i < this._mostrador.length; i++) {
      if (this._mostrador[i].tipo === tipo && this._mostrador[i].variedad === variedad) {
        if (this._mostrador[i].cantidad >= cantidad) {
          this._mostrador[i].restar(cantidad);
          console.log(this._mostrador[i].toString());
          if (this._mostrador[i].cantidad === 0) {
            this._mostrador[i].hora_venta_ultimo = new Date();
            console.log("Último vendido en " + this._mostrador[i].hora_venta_ultimo);
            console.log(this._mostrador[i].tiempo_venta().toLocaleTimeString());
            console.log(this._mostrador[i].toString());
          }
        }
      }
    }
  }
}

let b1 = new Bandeja("Caracolas", "Crema", 15, new Date(2021, 10, 9, 17, 0, 0));
let b2 = new Bandeja("Tocino de cielo", "Sin azúcar", 20, new Date(2021, 10, 9, 17, 0, 0));
let pasteleria = new LaPlata();

window.onload = function () {
  console.log("Nada más cargarse");
  pasteleria.poner_en_mostrador(b1);
  pasteleria.poner_en_mostrador(b2);
};

function comprar() {
  pasteleria.vender_pastel("Caracolas", "Crema", 5);
}
