let READY_STATE_UNINITIALIZED = 0;
let READY_STATE_LOADING = 1;
let READY_STATE_LOADED = 2;
let READY_STATE_INTERACTIVE = 3;
let READY_STATE_COMPLETE = 4;
let HTTP_STATUS_OK = 200;
let HTTP_STATUS_NOT_FOUND = 404;
let HTTP_STATUS_SERVER_ERROR = 500;

window.onload = () => {
  document.getElementById("carga_series").onclick = carga_series;
};

function carga_series() {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == READY_STATE_COMPLETE && xhr.status == HTTP_STATUS_OK) {
      cargar_json(xhr.responseText);
    }
  };
  xhr.open("GET", "/U7_asincrona/ejercicios/datosjson.php");
  xhr.send();
}

function cargar_json(response_json) {
  let json_series = JSON.parse(response_json);
  let table = document.createElement("table");
  let tbody = document.createElement("tbody");
  let tr = document.createElement("tr");
  let th = document.createElement("th");
  th.innerHTML = "Titulo";
  tr.appendChild(th);
  th = document.createElement("th");
  th.innerHTML = "Cadena";
  tr.appendChild(th);
  th = document.createElement("th");
  th.innerHTML = "Director";
  tr.appendChild(th);
  th = document.createElement("th");
  th.innerHTML = "Anyo";
  tr.appendChild(th);
  th = document.createElement("th");
  th.innerHTML = "Terminada";
  tr.appendChild(th);
  tbody.appendChild(tr);
  for (let serie of json_series) {
    tr = document.createElement("tr");
    let td = document.createElement("td");
    td.innerHTML = serie.TITULO;
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = serie.CADENA;
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = serie.DIRECTOR;
    tr.appendChild(td);
    td = document.createElement("td");
    let anyo = serie.ANYO;
    td.innerHTML = anyo;
    if (anyo < 2000) {
      class_anyo = "rojo";
    } else if (anyo >= 2001 && anyo <= 2010) {
      class_anyo = "amarillo";
    } else {
      class_anyo = "verde";
    }
    td.className = class_anyo;
    tr.appendChild(td);
    td = document.createElement("td");
    let terminada = serie.TERMINADA;
    let imagen_terminada = document.createElement("img");
    imagen_terminada.width = "50";
    imagen_terminada.height = "50";
    if (terminada === "Si") {
      imagen_terminada.src = "/U7_asincrona/ejercicios/ok.png";
      imagen_terminada.alt = "si";
    } else {
      imagen_terminada.src = "/U7_asincrona/ejercicios/nook.png";
      imagen_terminada.alt = "no";
    }
    td.appendChild(imagen_terminada);
    tr.appendChild(td);
    tbody.appendChild(tr);
  }
  table.appendChild(tbody);
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("resultado").appendChild(table);
}
