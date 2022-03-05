# Ejercicio 1

La empresa **CHEMAZON** desea regalar a sus empleados una colección con los vehículos más significativos que aparecen en las películas del estudio Ghibli . Para ello necesita disponer de una aplicación web con la que poder registrar el envío, con los siguientes elementos/características:

- Un botón `Carga Vehículos` que recupere los vehículos (petición `GET` mediante el objeto `XMLHttpRequest` a la URL `https://ghibliapi.herokuapp.com/vehicles`), los muestre en una tabla y los inserte en una BBDD (petición mediante la API `fetch` con el método `POST` y con el header `Content-type` a `application/json` a la url `insertar_vehiculos.php`). El objeto `JSON` a enviar será un array con los vehículos obtenidos en la petición anterior. Será algo así:

  ```json
  [
    {
      "id": "1",
      "name": "nombre nombre",
      "description": "descripcion vehiculo",
      "vehicle_class": "clase vehiculo"
    },
    {
      //...
    }
  ]
  ```

- El servidor responderá con un JSON con el estado de la petición y el mensaje de error en caso de que haya habido algún error. Algo así:

  ```json
  {
    "resultado": "Vehículos insertados correctamente."
  }
  ```

  Cualquiera otra respuesta del servidor se considerará error.

- La tabla anteriormente generada tendrá, para cada una de las filas (vehículos) una columna final que sea un `checkbox`. Dicha columna se llamará "Envíar".

- Finalmente, habrá un formulario de envío, donde se registrará la información del empleado (nombre, dirección, teléfono y correo electrónico) con sus _inputs_ correspondientes, y tendrá un botón `Registrar envío`. Al pulsar en el botón, se enviará dicha información del empleado, así como un array con los identificadores de los vehículos seleccionados en la tabla. Se hará una petición `POST` al fichero `registrar_envio.php` mediante `fetch`, con el header `Content-type` a `application/json`. El objeto `JSON` a enviar será un objeto con la siguiente información (todos los campos son obligatorios, incluído los vehículos). No es necesario hacer validaciones especiales adicionales:

  ```json
  {
    "nombre": "Meliton Manzanas",
    "direccion": "C/ Claudio Coello",
    "telefono": "987654321",
    "correo": "meliton@gmail.com",
    "vehiculos": [
      "4e09b023-f650-4747-9ab9-eacf14540cfb",
      "d8f893b5-1dd9-41a1-9918-0099c1aa2de8"
    ]
  }
  ```

- Una vez enviada la respuesta, el servidor responderá con un `JSON` con el resultado, con la estructura:

  ```json
  {
    "resultado": "envío registrado"
  }
  ```

  Cualquiera otra respuesta del servidor se considerará error. En el caso de que el envío resulte registrado, se limpiará el formulario y todos los `checkbox` de la tabla.

- Debe mostrarse un texto informativo en un contenedor `div` a cada paso de la aplicación:

  - Vehículos cargados
  - Vehículos insertados
  - Envío registrado

**NOTA: En caso de que no funcione la URL del estudio Ghibli, se proporciona el fichero vehiculos.json en sustitución de la misma.**

Se incluye a continuación un GIF de ejemplo:

<img alt="" class="img-responsive" src="http://aulavirtual.iesalixar.org/draftfile.php/7044/user/draft/455604971/Peek%2023-02-2022%2011-31.gif"/>

![demo](Peek%2023-02-2022%2011-31.gif)

## <ins>Instrucciones para la Entrega</ins>

- Entregar ÚNICA Y EXCLUSIVAMENTE los ficheros necesarios. Serán ficheros sueltos, correspondientes a los ejercicios (EjX.html EjX.js siendo X el número del ejercicio).

- Evita ñ y acentos en los nombres.

- **Deberán subirse a GitHub** los ficheros en la carpeta correspondiente (entregable_U7) que se encontrará dentro de la carpeta U7.
