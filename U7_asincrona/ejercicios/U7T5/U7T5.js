let READY_STATE_UNINITIALIZED = 0;
let READY_STATE_LOADING = 1;
let READY_STATE_LOADED = 2;
let READY_STATE_INTERACTIVE = 3;
let READY_STATE_COMPLETE = 4;
let HTTP_STATUS_OK = 200;
let HTTP_STATUS_NOT_FOUND = 404;
let HTTP_STATUS_SERVER_ERROR = 500;

window.onload = () => {
  document.getElementById("enviar").onclick = mostrar;
};

function mostrar() {
  let serie = {
    titulo: document.getElementById("titulo").value,
    director: document.getElementById("director").value,
    cadena: document.getElementById("cadena").value,
    anyo: parseInt(document.getElementById("anyo").value),
    terminada: document.getElementById("terminada").checked,
  };

  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == READY_STATE_COMPLETE && this.status == HTTP_STATUS_OK) {
      console.log(this.responseText);
      let respuesta = JSON.parse(this.responseText);
      let div = document.getElementById("resultado");
      div.innerHTML = respuesta;
      if (respuesta === "ok") {
        div.style.color = "green";
      } else {
        div.style.color = "red";
      }
    }
  };
  let parametros = JSON.stringify(serie);
  xhr.open("POST", "/U7_asincrona/teoria/codigo/create_serie.php");
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send(parametros);
}
