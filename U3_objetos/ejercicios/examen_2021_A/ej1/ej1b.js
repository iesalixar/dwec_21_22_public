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

class BandejaNueva {
	constructor(tipo, variedad, cantidad, hora_elaboracion) {
		this.tipo = tipo;
		this.variedad = variedad;
		this.cantidad = cantidad;
		this.hora_elaboracion = hora_elaboracion;
		this.hora_venta = new Date();
	}

	restar(cantidad) {
		if (this.cantidad >= cantidad) {
			this.cantidad -= cantidad;
		} else {
			this.cantidad = 0;
		}
	}

	addZero(i) {
		return i < 10 ? "0" + i : i;
	}

	toString() {
		return (
			this.tipo +
			" " +
			this.variedad +
			" " +
			this.cantidad +
			" " +
			this.addZero(this.hora_elaboracion.getHours()) +
			":" +
			this.addZero(this.hora_elaboracion.getMinutes()) +
			":" +
			this.addZero(this.hora_elaboracion.getSeconds()) +
			" " +
			this.addZero(this.hora_venta.getHours()) +
			":" +
			this.addZero(this.hora_venta.getMinutes()) +
			":" +
			this.addZero(this.hora_venta.getSeconds())
		);
	}

	tiempo_venta() {
		let tiempo = new Date(this.hora_venta - this.hora_elaboracion);
		let resultado =
			this.addZero(tiempo.getHours() - 1) +
			":" +
			this.addZero(tiempo.getMinutes()) +
			":" +
			this.addZero(tiempo.getSeconds());
		return resultado;
	}
}

class LaPlata {
	constructor() {
		this.mostrador = [];
	}

	refrescar_mostrador() {
		document.getElementById("mostrador").innerHTML = "";
		for (let i = 0; i < this.mostrador.length; i++) {
			document.getElementById("mostrador").innerHTML += this.mostrador[i].toString() + "<br>";
		}
	}

	poner_en_mostrador(bandeja) {
		let puesta_mostrador = false;
		for (let i = 0; i < this.mostrador.length; i++) {
			if (this.mostrador[i].tipo === bandeja.tipo && this.mostrador[i].variedad === bandeja.variedad) {
				puesta_mostrador = true;
			}
		}

		if (!puesta_mostrador) {
			this.mostrador.push(bandeja);
			this.refrescar_mostrador();
		} else {
			document.getElementById("errores").innerHTML = "Ya hay una bandeja con ese tipo y variedad";
		}
	}

	vender_pastel(bandeja, cantidad) {
		for (let i = 0; i < this.mostrador.length; i++) {
			if (
				this.mostrador[i].tipo === bandeja.tipo &&
				this.mostrador[i].variedad === bandeja.variedad &&
				this.mostrador[i].cantidad >= cantidad
			) {
				this.mostrador[i].restar(cantidad);
				if (this.mostrador[i].cantidad === 0) {
					this.mostrador[i].hora_venta = new Date();
					console.log("Último vendido en " + this.mostrador[i].tiempo_venta());
					this.refrescar_mostrador();
				}
			}
		}
	}
}

let pasteleria = new LaPlata();
let b1 = new BandejaNueva("Caracola", "Crema", 15, new Date(2021, 10, 09, 10, 10));
let b2 = new BandejaNueva("Tocinos de cielo", "Con azúcar", 15, new Date(2021, 10, 09, 10, 10));
pasteleria.poner_en_mostrador(b1);
pasteleria.poner_en_mostrador(b2);

function vender() {
	pasteleria.vender_pastel(b1, 5);
	pasteleria.vender_pastel(b1, 5);
	pasteleria.vender_pastel(b1, 15);
	pasteleria.refrescar_mostrador();
}
