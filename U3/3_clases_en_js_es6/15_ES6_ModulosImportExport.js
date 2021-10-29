/*
Los módulos son trozos de código que podemos escribir en ficheros independientes. 
Pueden tener clases, funciones, objetos, datos primitivos, etc. 
Desde ES6 se incorporó esta característica explícitamente, aunque se podía hacer 
previamente con transpiladores como Babel.
- Para indicar al navegador que un archivo Javascript utiliza módulos necesitamos indicar
<script src="miscript.js" type="module"></script>
- Para exportar una parte de un módulo utilizamos "export", de modo que le indicamos 
que se puede utilizar fuera.
- Para importar algo exportado por un módulo utilizamos "import".
- Una de las diferencias de declarar un script como module es que, si no indicamos 
que es un módulo, se ejecuta tantas veces como lo indiquemos, mientras que al declarar 
como module solamente se ejecuta una vez aunque lo indiquemos varias. */

//Importar una función de un archivo
import { cadenaMayuscula } from "./15_funciones.js"; //Hay que poner ./ en la ruta
const saludo = cadenaMayuscula("¡Hola, caracola!");
console.log(saludo);

//Importar más de un elemento de un archivo
import { IVAGENERAL, IVAREDUCIDO, IVASUPERREDUCIDO } from "./15_funciones.js";
console.log("Hay tres tipos de IVA: " + IVAGENERAL + ", " + IVAREDUCIDO + ", " + IVASUPERREDUCIDO);

/*
//Importar todos los elementos de un archivo
import * as todo from './15_funciones.js';
const saludo = todo.cadenaMayuscula("¡Hola, caracola!");
console.log(saludo);
console.log("Hay tres tipos de IVA: "+todo.IVAGENERAL+", "+todo.IVAREDUCIDO+", "+todo.IVASUPERREDUCIDO);
*/
