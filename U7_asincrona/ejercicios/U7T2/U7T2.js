let READY_STATE_UNINITIALIZED = 0;
let READY_STATE_LOADING = 1;
let READY_STATE_LOADED = 2;
let READY_STATE_INTERACTIVE = 3;
let READY_STATE_COMPLETE = 4;
let HTTP_STATUS_OK = 200;
let HTTP_STATUS_NOT_FOUND = 404;
let HTTP_STATUS_SERVER_ERROR = 500;

window.onload = () => {
  document.getElementById("enviar").addEventListener("click", lanzar_peticion);
};

function lanzar_peticion() {
  miXHR = new XMLHttpRequest();
  if (miXHR) {
    let localidad = document.getElementById("i_localidad").value;
    //Si existe el objeto miXHR abrimos la url (asíncrona)
    miXHR.open("GET", `/U7_asincrona/teoria/codigo/localidad.php?localidad=${localidad}`);
    // En cada cambio de estado llama a estadoPetición
    miXHR.onreadystatechange = resultado;
    // Hacemos la petición al servidor con GET y parámetro  null
    miXHR.send();
  }
}

function resultado() {
  if (miXHR.readyState == READY_STATE_COMPLETE && miXHR.status == HTTP_STATUS_OK) {
    // Metemos en el contenedor resultados las  respuestas de la petición AJAX.
    let resultado = document.getElementById("resultados");
    resultado.innerHTML = miXHR.responseText;
    if (miXHR.responseText == "SI") {
      resultado.style.color = "green";
    } else {
      resultado.style.color = "red";
    }
  }
}
