class Jugador {
  constructor(nombre, color_ficha) {
    this._nombre = nombre;
    this._color_ficha = color_ficha;
  }
}

class Partida {
  constructor(jugadores) {
    this._jugadores = jugadores;
  }
}

jugadores = [];
jugadores.push(new Jugador("Juan", "verde"));
jugadores.push(new Jugador("Pepe", "roja"));

let partida_1 = new Partida(jugadores);
