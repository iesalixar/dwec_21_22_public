let c;
let cp = document.getElementById("cp");
let apellidos = document.getElementById("apellidos");
let email = document.getElementById("email");
let servidor = document.getElementById("servidor");

window.onload = function () {
  c = prompt("Introduzca cadena");

  mostrar(c);
};

// "nombre:apellidos:telefono:email@servidor:codigopostal"

function mostrar(cadena) {
  let cadena_partida = cadena.split(":");
  cp.innerHTML = "CP=" + cadena_partida[4];
  apellidos.innerHTML = "Apellidos=" + cadena_partida[1];
  email.innerHTML = "Email=" + cadena_partida[3];
  servidor.innerHTML = "Servidor=" + cadena_partida[3].split("@")[1];
}
