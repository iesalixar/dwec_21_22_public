let READY_STATE_UNINITIALIZED = 0;
let READY_STATE_LOADING = 1;
let READY_STATE_LOADED = 2;
let READY_STATE_INTERACTIVE = 3;
let READY_STATE_COMPLETE = 4;
let HTTP_STATUS_OK = 200;
let HTTP_STATUS_NOT_FOUND = 404;
let HTTP_STATUS_SERVER_ERROR = 500;

document.getElementById("carga_series").addEventListener("click", carga_series);

document.getElementById("enviar").addEventListener("click", enviar_serie);

function carga_series() {
  fetch("/U7_asincrona/teoria/codigo/listar_series.php")
    .then((response) => {
      console.log(response);
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      console.log(data);
      procesar_series(data);
    })
    .catch((err) => console.log("chema: " + err));
}

function procesar_series(json_series) {
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
    td.innerHTML = serie.titulo;
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = serie.cadena;
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = serie.director;
    tr.appendChild(td);
    td = document.createElement("td");
    let anyo = serie.anyo;
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
    let terminada = serie.terminada;
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

function enviar_serie() {
  let serie = {
    titulo: document.getElementById("titulo").value,
    director: document.getElementById("director").value,
    cadena: document.getElementById("cadena").value,
    anyo: parseInt(document.getElementById("anyo").value),
    terminada: document.getElementById("terminada").checked,
  };

  fetch("/U7_asincrona/teoria/codigo/create_serie.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(serie),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      if (data === "ok") {
        carga_series();
      }
    })
    .catch((err) => console.log(err));
}
