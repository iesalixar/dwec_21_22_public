function set_cookie(nombre, valor, expiracion) {
	let d = new Date();
	d.setTime(d.getTime() + expiracion * 24 * 60 * 60 * 1000);
	expiracion = "expires=" + d.toUTCString();
	document.cookie = nombre + "=" + valor + ";" + expiracion + ";path=/";
}

function get_cookie(nombre) {
	let nom = nombre + "=";
	let array = document.cookie.split(";");
	for (let i = 0; i < array.length; i++) {
		let c = array[i];
		while (c.charAt(0) == " ") {
			c = c.substring(1);
		}
		if (c.indexOf(nombre) == 0) {
			return c.substring(nom.length, c.length);
		}
	}
	return "";
}

window.addEventListener("load", iniciar);
let intentos = 0;

function iniciar() {
	document.getElementById("nombre").addEventListener("focusout", a_mayusculas);
	document.getElementById("apellidos").addEventListener("focusout", a_mayusculas);
	document.getElementById("enviar").addEventListener("click", validar);
}

function a_mayusculas(e) {
	e.target.value = e.target.value.toLocaleUpperCase();
}

function validar(e) {
	if (
		validar_nombre() &&
		validar_apellidos() &&
		validar_edad() &&
		validar_nif() &&
		validar_email() &&
		validar_provincias() &&
		validar_fecha() &&
		validar_telefono() &&
		validar_hora() &&
		confirm("Pulsa aceptar si deseas enviar el formulario")
	) {
		return true;
	} else {
		set_cookie("intentos", ++intentos, 1);
		document.getElementById("intentos").innerHTML = "Intento de Envíos del formulario: " + get_cookie("intentos");
		e.preventDefault();
		return false;
	}
}

function validar_nombre() {
	let elemento = document.getElementById("nombre");
	if (elemento.value === "") {
		error(elemento, "El campo nombre no puede ser vacío");
		return false;
	}
	return true;
}

function validar_apellidos() {
	let elemento = document.getElementById("apellidos");
	if (elemento.value === "") {
		return error(elemento, "El campo apellidos no puede ser vacío");
	}
	return true;
}

function validar_edad() {
	let elemento = document.getElementById("edad");
	if (elemento.value === "") {
		return error(elemento, "El campo edad no puede ser vacío");
	} else if (isNaN(elemento.value)) {
		return error(elemento, "El campo edad tiene que ser numérico");
	} else if (elemento.value < 0 || elemento.value > 105) {
		return error(elemento, "El campo edad tiene que estar entre 0 y 105");
	}
	return true;
}

function validar_nif() {
	let elemento = document.getElementById("nif");
	if (elemento.value === "") {
		return error(elemento, "El campo nif no puede ser: " + elemento.value);
	} else if (/^\d{8}-[a-zA-Z]$/.test(elemento.value) == false) {
		return error(
			elemento,
			"El campo nif no tiene el formato adecuado. Inserte 8 números y una letra separados por un guión"
		);
	}
	return true;
}

function validar_email() {
	let elemento = document.getElementById("email");
	if (elemento.value === "") {
		return error(elemento, "El campo email no puede ser vacío");
	} else if (/^[^.\s]\w*.*@\w*[.]\w*$/.test(elemento.value) == false) {
		return error(elemento, "El campo email no tiene el formato adecuado");
	}
	return true;
}

function validar_provincias() {
	let elemento = document.getElementById("provincia");
	if (elemento.value === "0") {
		return error(elemento, "El campo provincias es obligatorio");
	}
	return true;
}

function validar_fecha() {
	let elemento = document.getElementById("fecha");
	if (elemento.value === "") {
		return error(elemento, "El campo fecha no puede ser vacío");
	} else if (/^\d{2}\/\d{2}\/\d{4}$/.test(elemento.value) == false) {
		return error(elemento, "El campo fecha no tiene el formato adecuado");
	}
	return true;
}

function validar_telefono() {
	let elemento = document.getElementById("telefono");
	if (elemento.value === "") {
		return error(elemento, "El campo teléfono no puede ser vacío");
	} else if (/^\d{9}$/.test(elemento.value) == false) {
		return error(elemento, "El campo teléfono no tiene el formato adecuado");
	}
	return true;
}

function validar_hora() {
	let elemento = document.getElementById("hora");
	if (elemento.value === "") {
		return error(elemento, "El campo hora no puede ser vacío");
	} else if (/^\d{2}:\d{2}$/.test(elemento.value) == false) {
		return error(elemento, "El campo hora no tiene el formato adecuado");
	}
	return true;
}

function error(elemento, mensaje) {
	let errores = document.getElementById("errores");
	errores.innerHTML = mensaje;
	elemento.focus();
	return false;
}
