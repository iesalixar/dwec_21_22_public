# Examen U3 2021 - A

## Ejercicio 1

La confitería **"La Plata"** en Los Barrios - Cádiz, elabora en su obrador una diversa gama de bollería fina. Los diferentes tipos de pasteles son:

- Caracolas (rellenas de crema o de chocolate)
- Tocinos de cielo (con o sin azúcar)
- Riñoncitos (de chocolate negro o blanco)
- Milhojas (de caramelo, de vainilla o de chocolate)

Las bandejas de pasteles que salen, necesitan ser vendidos en un tiempo determinado, por lo que es necesario controlar el tiempo que pasa desde que se terminan de elaborar, hasta que son vendidos.

Las bandejas se representan como una clase `Bandeja` que tiene como propiedades las siguientes:

- Tipo de pastel
- Variedad de pastel
- Cantidad
- Hora de elaboración
- Hora de venta del último pastel.

Y como métodos, los siguientes:

- Constructor: Recibe el tipo, variedad, cantidad de pasteles y la hora de salida.
- `tiempo_venta`: Que devuelve la diferencia en horas, minutos y segundos en formato HH:MM:SS entre que salió la bandeja y que se vendió el último pastel.
- `restar`: Que recibe la cantidad de pasteles que se retiran de la bandeja a la hora de realizar una venta. Nunca podrá quedarse la bandeja con valores negativos, y si la cantidad a restar es mayor, se quedará a cero la bandeja.
- `toString`: Que devuelve una cadena con el tipo, variedad, cantidad y las horas de elaboración y de última venta, las dos en formato HH:MM:SS siendo HH la hora, MM los minutos y SS los segundos.

Desarrolla la clase `LaPlata`, que contiene como propiedades, las siguientes:

- `mostrador`: Es un array de bandejas de pasteles recién salidas del horno. Hay como máximo una bandeja por tipo y variedad de pastel.

Y como métodos los siguientes:

- `poner_en_mostrador`: Este método es llamado cada vez que se elabora una bandeja y se pone en el mostrador. Recibe una bandeja de pasteles de algún de tipo y variedad de pastel. Por ejemplo, una bandeja con 15 caracolas de crema. Debe controlar que no se intente poner una bandeja de pasteles del mismo tipo y variedad que ya está.
- `vender_pastel`: Este método recibe el tipo y la variedad de pasteles, además de la cantidad que se quiere vender. Deberá comprobar que hay una bandeja de ese tipo  y variedad, y si después de la venta no quedan, mostrar el tiempo que ha tardado en venderse la bandeja entera. 

Simula la venta de una bandeja completa y muéstrala en un elemento HTML (p o div, como quieras).

## Ejercicio 2

Realiza una página que contenga una función JavaScript para hacer estadísticas sobre una cadena de texto que se le pase, contando el número de veces que aparece cada letra. Se deberá mostrar un listado con las letras del abcedario con el número de veces que aparece cada letra en la cadena que se la pasa. Utilizar un Array para almacenar la información estadística. No se tendrán en cuenta que pudiera haber tildes, así que consideraremos que no existen.

## Ejercicio 3

Un comercial de Samsung que recorre los establecimientos de electrónica de consumo de la zona occidental de Andalucía, necesita tener una aplicación para procesar los diferentes nombres de producto que se venden y la zona. Recibe un texto con el siguiente formato:

    tipo_producto|modelo|cantidad@cz:

Donde tipo_producto es uno de los tipos de productos (televisor, tablet, smartphone, laptop); el modelo se compone de tres letras mayúsculas y 3 números; la cantidad de ese producto, que es un número entero, que se vende la zona cz, que es un código de dos letras siguientes: HU, CA, SE.
Elabora el código en JavaScript para obtener por separado el tipo de producto, el modelo (dividido en las letras y los números correspondientes), la cantidad y la zona. Cada uno debe presentarse en un elemento (p o div, como quieras) de HTML.

## <ins>Instrucciones para la Entrega</ins>

- Entregar ÚNICA Y EXCLUSIVAMENTE los ficheros necesarios. Serán ficheros sueltos,  correspondientes a los ejercicios (EjX.html EjX.js siendo X el número del ejercicio).

- Evita ñ y acentos en los nombres.

- **Deberán subirse a GitHub** los ficheros en la carpeta correspondiente (entregable_U3) que se encontrará dentro de la carpeta U3.
