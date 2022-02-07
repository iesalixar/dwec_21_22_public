# Examen U3 2021 - B

## Ejercicio 1 (Ej1.html y Ej1.js)

Crea un tipo de objetos que sirvan para representar una `Carta`. Estos objetos tendrán dos propiedades:

- `palo`. Que será un número de 1 a 4 (donde 1 significa Oros, 2 Copas, 3 Espadas y 4 bastos)
- `valor`. Un número del 1 al 10 (8 = sota, 9 = caballo, 10 = rey).
  
Los objetos de este tipo se construyen indicando el palo y el valor. Si hay fallos en los datos se devuelve un objeto nulo en la creación.

Las cartas tendrán estos métodos:

- `darValor`. Que recibe un número de palo y un valor para la carta para, con ellos, modificar la carta. Ante datos incorrectos no cambia nada en la carta.
- `toString`. Método habitual (y estándar) para devoler en forma de texto entendible el valor de la carta. Por ejemplo: As de Oros.
  
Además, habrá otro tipo de objeto: `Baraja`. La idea es que represente ua baraja de cartas españolas. Tendrá los siguientes detalles:

- La baraja la forman 40 cartas. Para ello tendrá la propiedad cartas que será un array de 40 cartas.
- Al construir la Baraja se rellenan las cartas en el siguiente orden: por palos y cada palo con las cartas del 1 al 10. No se podrá acceder directamente al array fuera de la función constructora.
- El método `barajar` permite barajar las cartas. Es decir, desodernarlas de forma aleatoria.
- El método `toString` permite obtener la baraja en forma de texto para saber cómo están ordenadas las cartas. Simula la construcción de una baraja, muéstrala en un elemento HTML (p o div, como quieras), y luego muéstrala barajada en otro elemento HTML.

## Ejercicio 2 (Ej2.html y Ej2.js)

Realiza un script que pida una cadena de texto (mediante input o prompt) y la muestre en un elemento HTML (p o div, como quieras). En otro elemento HTML deberá mostrarla convirtiendo los caracteres en mayúscula o minúscula de manera completamente aleatoria, y, además, entre carácter y carácter, imprima un guión, y además elimine todos los espacios posibles (internos y externos). Por ejemplo: 

    "Si quiere vivir, venga conmigo"
    "s-I-q-U-I-e-r-e-v-I-v-I-R-,-V-e-N-G-a-c-O-N-m-i-G-O"

## Ejercicio 3 (Ej3.html y Ej3.js)

Un arquitecto de dudosa entereza moral, pretende vender parcelas comisionando a acaudalados incautos. En la base de datos del arquitecto, las parcelas y sus compradores están codificadas de la siguiente manera: 

    municipio:cod_parcela@nombre|apellido1|apellido2

Donde `municipio` es el municipio al que pertenece la parcela, `cod_parcela` es el código catastral de la parcela compuesto de 4 letras y 4 números (en ese orden), `nombre` es el nombre del comprador, `apellido1` su primer apellido y `apellido2` el segundo.

Elabora el código en JavaScript para obtener por separado el municipio, la parcela (dividido el código en las letras y los números correspondientes), el nombre, y los apellidos (los dos juntos y en una única línea). Cada uno debe presentarse en un elemento (p o div, como quieras) de HTML.

## <ins>Instrucciones para la Entrega</ins>

- Entregar ÚNICA Y EXCLUSIVAMENTE los ficheros necesarios. Serán ficheros sueltos,  correspondientes a los ejercicios (EjX.html EjX.js siendo X el número del ejercicio).

- Evita ñ y acentos en los nombres.

- **Deberán subirse a GitHub** los ficheros en la carpeta correspondiente (entregable_U3) que se encontrará dentro de la carpeta U3.
