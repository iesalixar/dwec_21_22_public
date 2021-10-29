/*
Las plantillas de cadena de texto (template strings) son literales de texto que habilitan el uso de:
- Expresiones incrustadas (${expresion})
- Cadenas de texto de más de una línea.
- Interpolación expresiones.
- Plantillas con una función de preprocesado (las veremos más adelante).
- NOTA: para escapar una comilla dentro de una plantilla se usa \
*/

//SINTAXIS
/*
`cadena de texto`
`línea 1 de la cadena de texto
 línea 2 de la cadena de texto`
`cadena de texto ${expresión} texto`
tag `cadena de texto ${expresión} texto`
*/

//Cadenas de más de una línea
//ES5
console.log("Hola, \n\
caracola");
//ES6
console.log(`Agur,
yogur`);

//Interpolar expresiones
let num1 = 2;
let num2 = 4;
//ES5
console.log("La suma es " + (num1 + num2) + "\ny la resta " + (num1 - num2) + ".");
//ES6
console.log(`La suma es ${num1 + num2}
y la resta ${num1 - num2}.`);
