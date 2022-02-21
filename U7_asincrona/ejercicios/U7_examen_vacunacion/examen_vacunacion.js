let READY_STATE_COMPLETE = 4;
let HTTP_STATUS_OK = 200;

window.onload = inicio;

let comunidades = [];
let respuesta_insercion;

function inicio() {
  document
    .getElementById("carga_datos_vacunacion_xml")
    .addEventListener("click", carga_datos_vacunacion_xml);
  document
    .getElementById("carga_datos_vacunacion_fetch")
    .addEventListener("click", carga_datos_vacunacion_fetch);

  document
    .getElementById("enviar")
    .addEventListener("click", actualizar_comunidad);
}

function genera_seleccionable() {
  document.getElementById("ccaa").innerHTML = "";
  let select = document.getElementById("ccaa");

  // Crear y añadir options
  for (let comunidad of comunidades) {
    let option = document.createElement("option");
    option.setAttribute("value", comunidad.ccaa);
    option.setAttribute("text", comunidad.ccaa);
    select.appendChild(option);
  }
}

function carga_datos_vacunacion_xml() {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (
      xhr.readyState === READY_STATE_COMPLETE &&
      xhr.status === HTTP_STATUS_OK
    ) {
      let data = JSON.parse(xhr.responseText);
      procesar_respuesta(data);
    }
  };
  // xhr.open("GET", "https://covid-vacuna.app/data/latest.json");
  xhr.open("GET", "latest.json", true);
  xhr.send();
}

function procesar_respuesta(data) {
  comunidades = [];
  for (let comunidad of data) {
    if (comunidad.ccaa == "Totales") continue;
    comunidades.push(comunidad);
  }
  document.getElementById("resultados").innerHTML = "Datos cargados de la WEB";
  insertar_comunidades(comunidades);
  genera_seleccionable();
}

function carga_datos_vacunacion_fetch() {
  // fetch("https://covid-vacuna.app/data/latest.json")
  fetch("latest.json")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      procesar_respuesta(data);
    })
    .catch((err) => console.log(err));
}

function procesar_comunidades(comunidades) {
  document.getElementById("tabla_resultados").innerHTML = "";
  let tabla = document.createElement("table");
  tabla.setAttribute("id", "tabla_comunidades");
  let thead = document.createElement("thead");
  let tr = document.createElement("tr");
  let th = document.createElement("th");
  th.innerHTML = "CCAA";
  tr.appendChild(th);
  th = document.createElement("th");
  th.innerHTML = "D. Entregadas";
  tr.appendChild(th);
  th = document.createElement("th");
  th.innerHTML = "D. Admin";
  tr.appendChild(th);
  th = document.createElement("th");
  th.innerHTML = "D. Completa";
  tr.appendChild(th);
  th = document.createElement("th");
  th.innerHTML = "% Entregadas";
  tr.appendChild(th);
  th = document.createElement("th");
  th.innerHTML = "% Pobl. Admin.";
  tr.appendChild(th);
  th = document.createElement("th");
  th.innerHTML = "% Pobl. Completa";
  tr.appendChild(th);
  thead.appendChild(tr);
  tabla.appendChild(thead);
  let tbody = document.createElement("tbody");
  for (let comunidad of comunidades) {
    tr = document.createElement("tr");
    td = document.createElement("td");
    td.innerHTML = comunidad.ccaa;
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = comunidad.dosisEntregadas;
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = comunidad.dosisAdministradas;
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = comunidad.dosisPautaCompletada;
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = parseFloat(comunidad.porcentajeEntregadas * 100).toFixed(2);
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = parseFloat(
      comunidad.porcentajePoblacionAdministradas * 100
    ).toFixed(2);
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = parseFloat(
      comunidad.porcentajePoblacionCompletas * 100
    ).toFixed(2);
    tr.appendChild(td);
    tbody.appendChild(tr);
  }
  tabla.appendChild(tbody);
  document.getElementById("tabla_resultados").appendChild(tabla);
}

function actualizar_comunidad() {
  let comunidad = {
    ccaa: document.getElementById("ccaa").value,
    dosisEntregadas: parseInt(document.getElementById("d_entregadas").value),
    dosisAdministradas: parseInt(document.getElementById("d_admin").value),
    dosisPautaCompletada: parseInt(document.getElementById("d_completa").value),
    porcentajeEntregadas: parseFloat(
      document.getElementById("p_entregadas").value
    ),
    porcentajePoblacionAdministradas: parseFloat(
      document.getElementById("p_admin").value
    ),
    porcentajePoblacionCompletas: parseFloat(
      document.getElementById("p_completa").value
    ),
  };

  fetch("actualizar_comunidad.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(comunidad),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      for (let i = 0; i < comunidades.length; i++) {
        if (data.ccaa === comunidades[i].ccaa) {
          comunidades[i] = data;
        }
      }
      document.getElementById("resultados").innerHTML = "Comunidad actualizada";
      procesar_comunidades(comunidades);
    })
    .catch((err) => console.log(err));
}

function insertar_comunidades(comunidades) {
  fetch("insertar_comunidades.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(comunidades),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      procesar_comunidades(data);
    })
    .catch((err) => console.log(err));
}
