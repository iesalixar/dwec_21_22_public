// Definimos la clase aeropuerto
function Aeropuerto(nombre, ciudad, n_vuelos) {
  // Atributos clase aeropuerto
  this.nombre = nombre;
  this.ciudad = ciudad;
  this.vuelos = [];

  // Inicializamos vuelos
  for (i = 0; i < n_vuelos; i++) {
    this.vuelos[i] = new Vuelo(i, "11:00", "12:00");
  }

  // cambia hora llegada
  this.cambiar_hora_llegada = function cambiar_hora_llegada(n, nueva_hora) {
    this.vuelos[n].cambiar_hora_llegada(nueva_hora);
  };

  // cambia hora salida
  this.cambiar_hora_salida = function cambiar_hora_salida(n, nueva_hora) {
    this.vuelos[n].cambiar_hora_salida(nueva_hora);
  };

  // Comprueba si llegada posterior a salida
  this.comp_llegada_mayor_salida = function comp_llegada_mayor_salida(n) {
    console.log(this.vuelos[n].comprueba_llegada_mayor_salida());
  };
}

// Definimos la clase vuelo
// Formato horas HH:MM
function Vuelo(codigo, hora_salida, hora_llegada) {
  // Atributos del vuelo
  this.codigo = codigo;
  this.hora_salida = hora_salida;
  this.hora_llegada = hora_llegada;

  // cambia hora llegada
  this.cambiar_hora_llegada = function (nueva_hora) {
    this.hora_llegada = nueva_hora;
  };

  // cambia hora salida
  this.cambiar_hora_salida = function cambiar_hora_salida(nueva_hora) {
    this.hora_salida = nueva_hora;
  };

  // Comprueba si llegada posterior a salida
  this.comprueba_llegada_mayor_salida = function comprueba_llegada_mayor_salida() {
    let lleg = this.hora_llegada.split(":");
    let sal = this.hora_salida.split(":");

    let hhlleg = parseInt(lleg[0]);
    let mmlleg = parseInt(lleg[1]);

    let hhsal = parseInt(sal[0]);
    let mmsal = parseInt(sal[1]);

    // Primero compruebo si las horas son iguales. En ese caso
    // tendré que devolver si los minutos de llegada son mayores que los de salida.
    // Pero si resulta que las horas son diferentes, entonces tendremos que devolver
    // el resultado de su comprobación. Es decir, si la hora de llegada es mayor
    // que la hora de salida.

    if (hhlleg == hhsal) {
      return mmlleg > mmsal;
    } else {
      return hhlleg > hhsal;
    }
  };
}

let miAeropuerto = new Aeropuerto("Velazquez", "Sevilla", 10);
miAeropuerto.comp_llegada_mayor_salida(1);
miAeropuerto.cambiar_hora_salida(1, "13:00");
miAeropuerto.comp_llegada_mayor_salida(1);
miAeropuerto.cambiar_hora_llegada(1, "14:00");
miAeropuerto.comp_llegada_mayor_salida(1);
