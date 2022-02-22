let READY_STATE_COMPLETE = 4;
let HTTP_STATUS_OK = 200;
window.onload = inicio;

let coins;
let id_monedas = [
  "bitcoin",
  "ethereum",
  "tether",
  "binancecoin",
  "usd-coin",
  "ripple",
  "cardano",
  "solana",
  "terra-luna",
  "binance-usd",
];

function inicio() {
  document.getElementById("cargar_criptos").onclick = cargar_criptos;
  
}

function cargar_criptos() {
  console.log("cargar_criptos");
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === READY_STATE_COMPLETE && xhr.status === HTTP_STATUS_OK) {
      console.log("cargar_criptos - response");
      coins = JSON.parse(xhr.responseText);
      generar_tabla(coins);
      generar_select(coins, id_monedas);
    }
  };
  xhr.open("GET", "https://api.coingecko.com/api/v3/coins/list");
  xhr.send();
}

function generar_tabla(coins) {
  let tabla = document.createElement("table");
  tabla.innerHTML = "";
  let thead = document.createElement("thead");
  let fila = document.createElement("tr");
  let th = document.createElement("th");
  th.innerHTML = "Id";
  fila.appendChild(th);
  th = document.createElement("th");
  th.innerHTML = "Symbol";
  fila.appendChild(th);
  th = document.createElement("th");
  th.innerHTML = "Name";
  fila.appendChild(th);
  thead.appendChild(fila);
  tabla.appendChild(thead);
  let tbody = document.createElement("tbody");
  for (let coin of coins) {
    fila = document.createElement("tr");
    th = document.createElement("th");
    th.innerHTML = coin.id;
    fila.appendChild(th);
    th = document.createElement("th");
    th.innerHTML = coin.symbol;
    fila.appendChild(th);
    th = document.createElement("th");
    th.innerHTML = coin.name;
    fila.appendChild(th);
    tbody.appendChild(fila);
  }
  tabla.appendChild(tbody);
  let div = document.getElementById("contenedor_resultados");
  div.appendChild(tabla);
}

function generar_select(coins, id_monedas) {
  let select = document.getElementById("select_monedas");
  for (let moneda of id_monedas) {
    for (let coin of coins) {
      if (coin.id == moneda) {
        let option = document.createElement("option");
        option.setAttribute("value", coin.id);
        option.innerHTML = coin.name;
        select.appendChild(option);
      }
    }
  }
  select.onchange = cargar_datos_moneda;
}

function cargar_datos_moneda() {
  let moneda = document.getElementById("select_monedas").value;
  fetch(`https://api.coingecko.com/api/v3/coins/${moneda}`)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
  })
  .then((data) => {
    let datos_moneda = {
      name: data.name,
      symbol: data.symbol,
      image_url: data.image.large,
      current_price_eur: data.market_data.current_price.eur,
    }
    generar_ficha(datos_moneda);
    guardar_moneda(datos_moneda);
  })
  .catch((err) => console.log(err));
}

function guardar_moneda(moneda) {
  fetch("guardar_moneda.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(moneda),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log(err));
}


function generar_ficha(datos_moneda) {
  let div = document.getElementById("ficha_moneda");
  div.innerHTML = "";
  let ficha = document.createElement("div");
  ficha.setAttribute("class", "ficha");
  let imagen = document.createElement("img");
  imagen.setAttribute("src", datos_moneda.image_url);
  imagen.setAttribute("alt", datos_moneda.name);
  ficha.appendChild(imagen);
  let titulo = document.createElement("h2");
  titulo.innerHTML = datos_moneda.name;
  ficha.appendChild(titulo);
  let parrafo = document.createElement("p");
  parrafo.innerHTML = `Precio actual: ${datos_moneda.current_price_eur} €`;
  ficha.appendChild(parrafo);
  div.appendChild(ficha);


}