// Un comercial de Samsung que recorre los establecimientos de electrónica de consumo de la zona occidental de Andalucía,
// necesita tener una aplicación para procesar los diferentes nombres de producto que se venden y la zona. Recibe un
// texto con el siguiente formato:

// tipo_producto|modelo|cantidad@cz:

// Donde tipo_producto es uno de los tipos de productos (televisor, tablet, smartphone, laptop); el modelo se compone
// de tres letras mayúsculas, un guión y 3 números; la cantidad de ese producto que se vende en la zona cz, que es un
// código de dos letras siguientes: HU, CA, SE.

// Por ejemplo: televisor|ZBC345|100@CA

// Elabora el código en JavaScript para obtener por separado el tipo de producto, el modelo (dividido en las letras y
// los números correspondientes), la cantidad y la zona. Cada uno debe presentarse en un elemento (p o div, como quieras)
//  de HTML.

// Simula la venta de una bandeja completa y muéstrala en un elemento HTML (p o div, como quieras)

let ejemplo = "televisor|ZBC345|100@CA";

samsung(ejemplo);

function samsung(cad) {
  cad_separada = cad.split("|");
  let tipo_producto = cad_separada[0];
  let modelo_letras = cad_separada[1].substring(0, 3);
  let modelo_numeros = cad_separada[1].substring(3, 6);
  let cantidad = cad_separada[2].split("@")[0];
  let codigo_zona = cad_separada[2].split("@")[1];

  document.getElementById("tipo_producto").innerHTML = tipo_producto;
  document.getElementById("modelo_letras").innerHTML = modelo_letras;
  document.getElementById("modelo_numeros").innerHTML = modelo_numeros;
  document.getElementById("cantidad").innerHTML = cantidad;
  document.getElementById("codigo_zona").innerHTML = codigo_zona;
}
