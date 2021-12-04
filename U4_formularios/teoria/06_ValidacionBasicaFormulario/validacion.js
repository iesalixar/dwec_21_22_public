//SELECCION DEL FORMULARIO

//Conociendo el id
let formulario = document.getElementById("miFormulario");
let formulario2 = document.forms["miFormulario"];

//Conociendo el número de formulario que es en la página
let formulario3 = document.getElementsByTagName("form")[0];
let formulario4 = document.forms[0];

//SELECCIONAR ELEMENTOS DE UN FORMULARIO
//.elements[] Devuelve un array con todos los input del formulario
//getElementById("idElemento") Devuelve un elemento con un id determinado
//getElementsByTagName("etiqueta") Devuelve un array con elementos de un tipo de etiqueta (input, select, etc.)
//getElementsByName("nombre") Devuelve un array con elementos que tienen el mismo nombre (por ejemplo, radiobutton).

window.onload = iniciar; //Sin paréntesis

function iniciar() {
  document.getElementById("enviar").addEventListener("click", validar, false);
}

function validaNombre() {
  let elemento = document.getElementById("nombre");
  limpiarError(elemento);
  if (elemento.value === "") {
    alert("El campo no puede ser vacío");
    error(elemento);
    return false;
  }
  return true;
}

function validaTelefono() {
  let elemento = document.getElementById("telefono");
  limpiarError(elemento);
  if (elemento.value === "" || isNaN(elemento.value)) {
    alert("El campo teléfono tiene que ser numérico");
    error(elemento);
    return false;
  }
  return true;
}

function validaFecha() {
  let dia = document.getElementById("dia").value;
  let mes = document.getElementById("mes").value;
  let ano = document.getElementById("ano").value;

  let fecha = new Date(ano, mes, dia);
  if (dia === "" || mes === "" || ano === "" || isNaN(fecha)) {
    alert("Los campos de la fecha son incorrectos");
    return false;
  }
  return true;
}

function validaCheck() {
  let campoCheck = document.getElementById("mayor");
  if (!campoCheck.checked) {
    alert("Debes ser mayor de edad");
    return false;
  }
  return true;
}

function validar(e) {
  if (
    validaNombre() &&
    validaTelefono() &&
    validaFecha() &&
    validaCheck() &&
    confirm("Pulsa aceptar si deseas enviar el formulario")
  ) {
    return true;
  } else {
    e.preventDefault();
    return false;
  }
}

function error(elemento) {
  elemento.className = "error";
  elemento.focus();
}

function limpiarError(elemento) {
  elemento.className = "";
}
