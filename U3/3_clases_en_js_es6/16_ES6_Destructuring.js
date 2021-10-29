/* DESTRUCTURING 
Destructuring es un modo de extraer valores de datos almacenados en objetos y arrays, 
descomponiéndolos y asignándolos a un grupo de variables.
Mediante patrones se pueden especificar cómo extraer los valores. */

//Destructuring de arrays (asignación básica)
const galicia = ["A Coruña", "Lugo", "Ourense", "Pontevedra"];
const [c, lu, ou] = galicia;
console.log(c);
console.log(ou);
//console.log(p);

//Destructuring de arrays (asignación separada de la declaración)
let cc, ba;

[cc, ba = "Merida"] = ["Cáceres", "Badajoz"];
console.log(cc);
console.log(ba);

//Destructuring de objetos (asignación básica)
const varios = { p: 11, q: true, r: "Hola" };
const { p, r } = varios;
console.log(p);
//console.log(q);
console.log(r);

//Destructuring de objetos (asignando a nuevos nombres de variables)
const objeto = { nombre: "Ada", apellido: "Lovecode" };
//Tomamos del objeto la propiedad llamada nombre y la asignamos a la variable n
const { nombre: n, apellido: a } = objeto;
console.log(n + " " + a);
//Tomamos del objeto el valor del nombre y del apellido
const { nombre, apellido } = objeto;
console.log(nombre + " " + apellido);

//Destructuring de objetos (asignación sin declaración)
let x, y;
({ x, y } = { x: 1, y: 2 }); //Es obligatorio el paréntesis en este tipo de asignación
console.log(x);
console.log(y);
