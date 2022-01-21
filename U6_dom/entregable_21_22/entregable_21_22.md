# U6 - Entregable 21_22

Desarrolla una web que, mediante una llamada a una función que se llame `generate_card`, genere el siguiente código HTML:

    <div class="my-3 p-3 bg-body rounded shadow-sm">
        <h6 class="border-bottom pb-2 mb-0">Explorar</h6>
        <div class="d-flex text-muted pt-3">
          <svg
            class="bd-placeholder-img flex-shrink-0 me-2 rounded"
            width="32"
            height="32"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 32x32"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#007bff" />
            <text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text>
          </svg>

          <div class="pb-3 mb-0 small lh-sm border-bottom w-100">
            <div class="d-flex justify-content-between">
              <strong class="text-gray-dark">TITULO</strong>
            </div>
            <span class="d-block"
              >SINOPSIS</span
            >
              <button type="button" id="descargar" class="btn btn-success float-end">Descargar</button>
          </div>
        </div>
        <small class="d-block text-end mt-3">
          <a href="#">Listado completo</a>
        </small>
      </div>

Hay que tener en cuenta una serie de consideraciones:

- La función `generate_card` recibirá dos parámetros (que se llamarán `titulo` y `sinopsis`), y cuyo contenido sustituirá los datos que están en mayúsculas en el ejemplo (TÍTULO y SINOPSIS). De esta manera, cada vez que se llame a esa función con un `título` y una `sinopsis`concreta, se generá ese HTML con los datos de ese título y sinopsis.

- Se proporciona un HTML base con el que trabajar, que no debe ser modificado salvo para añadir el script que se desarrolle.

- La función añadirá (`appendChild`) siempre lo generado como hijo del elemento cuyo id es `main` en el HTML que se proporciona (se encuentra al final del todo).

- La función de `inicio` que se desarrolle, deberá llamar como mínimo a la función `generate_card` con dos títulos y dos sinopsis diferentes (datos cualesquieras inventados para probar).

- Se valorará enormemente el desarrollo de funciones auxiliares de generación de nodos.

## <ins>Instrucciones para la Entrega</ins>

- Entregar ÚNICA Y EXCLUSIVAMENTE los ficheros necesarios. Serán ficheros sueltos, correspondientes a los ejercicios (EjX.html EjX.js siendo X el número del ejercicio).

- Evita ñ y acentos en los nombres.

- **Deberán subirse a GitHub** los ficheros en la carpeta correspondiente (entregable_U6) que se encontrará dentro de la carpeta U6.
