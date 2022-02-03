window.onload = inicio;

function inicio() {
  document.getElementById("cargaCatalogo").onclick = cargar_catalogo;
}

function cargar_catalogo() {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      procesar_xml(xhr.responseXML);
    }
  };
  xhr.open("GET", "catalogo.xml", true);
  xhr.send();
}

function procesar_xml(docXML) {
  let table = document.createElement("table");
  table.setAttribute("border", "1");
  table.setAttribute("id", "tabla");
  tr_header = document.createElement("tr");
  th_header_artista = document.createElement("th");
  th_header_artista.appendChild(document.createTextNode("Artista"));
  th_header_titulo = document.createElement("th");
  th_header_titulo.appendChild(document.createTextNode("Titulo"));

  let discos = docXML.getElementsByTagName("CD");
  for (let i = 0; i < discos.length; i++) {
    let tr = document.createElement("tr");
    let td_artista = document.createElement("td");
    let td_titulo = document.createElement("td");
    td_artista.appendChild(document.createTextNode(discos[i].getElementsByTagName("ARTIST")[0].firstChild.nodeValue));
    td_titulo.appendChild(document.createTextNode(discos[i].getElementsByTagName("TITLE")[0].firstChild.nodeValue));
    tr.appendChild(td_artista);
    tr.appendChild(td_titulo);
    table.appendChild(tr);
  }

  document.getElementById("resultado").appendChild(table);
}
