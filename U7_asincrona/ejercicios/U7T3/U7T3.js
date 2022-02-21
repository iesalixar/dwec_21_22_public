let READY_STATE_UNINITIALIZED = 0;
let READY_STATE_LOADING = 1;
let READY_STATE_LOADED = 2;
let READY_STATE_INTERACTIVE = 3;
let READY_STATE_COMPLETE = 4;
let HTTP_STATUS_OK = 200;
let HTTP_STATUS_NOT_FOUND = 404;
let HTTP_STATUS_SERVER_ERROR = 500;

window.onload = () => {
  document.getElementById("carga_series").addEventListener("click", carga_series);
};

function carga_series() {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = procesar_peticion;
  xhr.open("GET", "/U7_asincrona/teoria/codigo/localidad.php");
  xhr.send();
}

function procesar_peticion() {
  if (xhr.readyState == READY_STATE_COMPLETE && xhr.status == HTTP_STATUS_OK) {
    procesar_xml(xhr.responseXML);
}

function procesar_xml(xml) {
  let table = document.createElement("table");
  let tbody = document.createElement("tbody");
  let tr = document.createElement("tr");
  let th = document.createElement("th");
  th.innerHTML = "Título";
  tr.appendChild(th);
  th = document.createElement("th");
  th.innerHTML = "Cadena";
  tr.appendChild(th);
  th = document.createElement("th");
  th.innerHTML = "Director";
  tr.appendChild(th);
  th = document.createElement("th");
  th.innerHTML = "Año";
  tr.appendChild(th);
  th = document.createElement("th");
  th.innerHTML = "Terminada";
  tr.appendChild(th);
  tbody.appendChild(tr);
  let series = xml.getElementsByTagName("SERIE");
  for (let serie of series) {
    tr = document.createElement("tr");
    let td = document.createElement("td");
    td.innerHTML = serie.getElementsByTagName("TITULO")[0].innerHTML;
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = serie.getElementsByTagName("CADENA")[0].innerHTML;
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = serie.getElementsByTagName("DIRECTOR")[0].innerHTML;
    tr.appendChild(td);
    td = document.createElement("td");
    let anyo = serie.getElementsByTagName("ANYO")[0].innerHTML;
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
    let terminada = serie.getElementsByTagName("TERMINADA")[0].innerHTML;
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
  document.getElementById("resultado").appendChild(table);
}
