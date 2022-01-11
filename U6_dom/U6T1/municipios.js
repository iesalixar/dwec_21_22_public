window.onload = iniciar;

let info = document.getElementById("info");

function iniciar() {
  let p_todos = document.getElementsByTagName("p");
  let p_primero = document.getElementsByTagName("p")[0];
  let a_p_primero = p_primero.getElementsByTagName("a");
  let a_todos = document.getElementsByTagName("a");
  let a_primero = a_todos[0];
  let a_penultimo = a_todos[a_todos.length - 2];
  info.innerHTML = "Número de párrafos de la página:  " + p_todos.length;
  info.innerHTML += "</br>" + "Texto del segundo párrafo: " + p_todos[1].nodeValue;
  info.innerHTML += "</br>" + "Número de enlaces de la página: " + a_todos.length;
  info.innerHTML += "</br>" + "Dirección del primer enlace: " + a_primero.href;
  info.innerHTML += "</br>" + "Dirección del penúltimo enlace: " + a_penultimo.href;
  info.innerHTML += "</br>" + "Número de enlaces que apuntan a /wiki/Municipio: " + wiki_municipio(a_todos);
  info.innerHTML += "</br>" + "Número de enlaces del primer párrafo: " + a_p_primero.length;
}

function wiki_municipio(enlaces) {
  let cont = 0;
  for (const i of enlaces) {
    if (i.href.includes("/wiki/Municipio")) {
      cont++;
    }
  }
  return cont;
}
