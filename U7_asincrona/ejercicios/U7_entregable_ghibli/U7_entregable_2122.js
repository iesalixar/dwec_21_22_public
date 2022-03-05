READY_STATE_COMPLETE = 4;
HTTP_STATUS_OK = 200;
window.onload = inicio;

function inicio() {
  document.getElementById("carga").onclick = cargar_vehiculos;
  document.getElementById("registrar_envio").onclick = registrar_envio;
}

function cargar_vehiculos() {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (
      xhr.readyState === READY_STATE_COMPLETE &&
      xhr.status === HTTP_STATUS_OK
    ) {
      let data = JSON.parse(xhr.responseText);
      document.getElementById("resultados").innerHTML = "Vehículos cargados";
      console.log(data);
      procesar_vehiculos(data);
      insertar_vehiculos(data);
    }
  };
  xhr.open("GET", "https://ghibliapi.herokuapp.com/vehicles", true);
  xhr.send();
}

function procesar_vehiculos(data) {
  document.getElementById("tabla_resultados").innerHTML = "";
  let tabla = document.createElement("table");
  tabla.setAttribute("id", "tabla_vehiculos");
  let thead = document.createElement("thead");
  let tr = document.createElement("tr");
  let th = document.createElement("th");
  th.innerHTML = "Id";
  tr.appendChild(th);
  th = document.createElement("th");
  th.innerHTML = "Name";
  tr.appendChild(th);
  th = document.createElement("th");
  th.innerHTML = "Description";
  tr.appendChild(th);
  th = document.createElement("th");
  th.innerHTML = "Vehicle Class";
  tr.appendChild(th);
  th = document.createElement("th");
  th.innerHTML = "Enviar";

  tr.appendChild(th);
  thead.appendChild(tr);
  tabla.appendChild(thead);
  let tbody = document.createElement("tbody");
  for (let vehiculo of data) {
    tr = document.createElement("tr");
    th = document.createElement("th");
    th.innerHTML = vehiculo.id;
    tr.appendChild(th);
    th = document.createElement("th");
    th.innerHTML = vehiculo.name;
    tr.appendChild(th);
    th = document.createElement("th");
    th.innerHTML = vehiculo.description;
    tr.appendChild(th);
    th = document.createElement("th");
    th.innerHTML = vehiculo.vehicle_class;
    tr.appendChild(th);
    checkbox_enviar = document.createElement("input");
    checkbox_enviar.setAttribute("type", "checkbox");
    checkbox_enviar.setAttribute("id", vehiculo.id);
    checkbox_enviar.setAttribute("name", "envio");
    checkbox_enviar.setAttribute("value", vehiculo.id);
    tr.appendChild(checkbox_enviar);
    tbody.appendChild(tr);
  }
  tabla.appendChild(tbody);
  document.getElementById("tabla_resultados").appendChild(tabla);
}

function insertar_vehiculos(data) {
  fetch("insertar_vehiculos.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      console.log(data);
      document.getElementById("resultados").innerHTML = "Vehículos insertados";
    })
    .catch((err) => console.log(err));
}

function registrar_envio() {
  console.log("registrar_envio");
  let objeto_envio = {
    nombre: document.getElementById("nombre").value,
    direccion: document.getElementById("direccion").value,
    telefono: document.getElementById("telefono").value,
    correo: document.getElementById("correo").value,
    vehiculos: obtener_vehiculos_seleccionados(),
  };

  console.log(objeto_envio);

  fetch("registrar_envio.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objeto_envio),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      console.log(data.resultado);
      if (data.resultado !== null && data.resultado === "envio registrado") {
        document.getElementById("resultados").innerHTML = "Envío registrado";
        document.getElementById("form_registro_envio").reset();
        let tabla = document.getElementById("tabla_resultados");
        let checkboxes = tabla.getElementsByTagName("input");
        for (let checkbox of checkboxes) {
            checkbox.checked = false;
          }
      } else {
        document.getElementById("resultados").innerHTML =
          "Error al registrar envío: " + data.resultado;
      }
    })
    .catch((err) => console.log(err));
}

function obtener_vehiculos_seleccionados() {
  let vehiculos_seleccionados = [];
  let tabla = document.getElementById("tabla_vehiculos");
  let checkboxes = tabla.getElementsByTagName("input");
  for (let checkbox of checkboxes) {
    if (checkbox.checked) {
      vehiculos_seleccionados.push(checkbox.id);
    }
  }
  return vehiculos_seleccionados;
}
