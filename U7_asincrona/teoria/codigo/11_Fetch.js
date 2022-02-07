/*
		  fetch(direccion_servicio)
		    .then(funcion_que_recibe_el_objeto_de_la_respuesta_si_la_peticion_finaliza_bien)
		    .catch(funcion_que_recibe_el_error_producido_durante_la_petición);


      // EJEMPLO CORTO

		  fetch('http://example.com/movies.json')
		    .then(response => response.json())
		    .then(data => console.log(data));
			  .catch( err => console.log(err) );
      
      // EJEMPLO LARGO
        
			fetch('/echo/json/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(objeto_datos)
			})
			.then(function (response) {
				return response.json();
			})
			.then(function (result) {
				alert(result);
			})
			.catch (function (error) {
				console.log('Request failed', error);
			});
			

		   */

fetch("holamundo.txt")
  .then((response) => response.text())
  .then((texto) => {
    console.log(texto);
  })
  .catch((error) => {
    console.log("Error: " + error);
  });

fetch("catalogo.xml")
  .then((response) => response.text())
  .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

fetch("personajes.json")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
