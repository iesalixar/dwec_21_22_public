let READY_STATE_COMPLETE = 4;
let HTTP_STATUS_OK = 200;
window.onload = inicio;

function inicio() {
  document.getElementById("nombre").addEventListener("keyup", mostrar_nombre);
}

function mostrar_nombre(e) {
  let cadena = e.target.value;
  // otra forma de hacer lo mismo
  // let cadena = document.getElementById("nombre").value

  if (cadena.length == 0) {
    document.getElementById("sugerencia").innerHTML = "";
    return;
  } else {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (this.readyState == READY_STATE_COMPLETE && this.status == HTTP_STATUS_OK) {
        document.getElementById("sugerencia").innerHTML = this.responseText;
      }
    };
    xhr.open("POST", "arraynombres_post.php");
    xhr.setRequestHeader("Content-type", "application/json");
    let dato = {
      alumno: cadena,
    };
    let cadena_formato_json = JSON.stringify(dato);
    xhr.send(cadena_formato_json);
  }
}
