window.addEventListener("load", iniciar);

function iniciar() {
	document.getElementById("enviar").addEventListener("click", validar);
}

function validar(e) {
	e.preventDefault();
	if (
		validar_nombre() &&
		validar_tipo_modelo() &&
		validar_fecha() &&
		validar_consumo() &&
		validar_referencia() &&
		validar_password() &&
		confirm("Pulsa aceptar si deseas enviar el formulario")
	) {
		return true;
	} else {
		return false;
	}
}

function validar_nombre() {
	let elemento = document.getElementById("nombre");
	if (elemento.value === "") {
		return error(elemento, "El campo nombre no puede ser vacío");
	} else {
		return correcto(elemento);
	}
}

function validar_fecha() {
	let elemento = document.getElementById("fecha");
	if (elemento.value === "") {
		return error(elemento, "El campo fecha no puede ser vacío");
	} else if (/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(elemento.value) == false) {
		return error(elemento, "El campo fecha no cumple el formato");
	} else {
		return correcto(elemento);
	}
}

function validar_consumo() {
	let elemento = document.getElementById("consumo");
	if (elemento.value === "") {
		return error(elemento, "El campo consumo no puede ser vacío");
	} else if (/^([A]\+{0,3}|[BCD])$/.test(elemento.value) == false) {
		return error(elemento, "El campo consumo no cumple el formato");
	} else {
		return correcto(elemento);
	}
}

function validar_referencia() {
	let elemento = document.getElementById("referencia");
	if (elemento.value === "") {
		return error(elemento, "El campo referencia no puede ser vacío");
	} else if (/^[A-Z]{2}\d{2}F(([3-9]\d{2})|([1-7]\d{3})|8000)AF[xyzXYZ]{3}$/.test(elemento.value) == false) {
		return error(elemento, "El campo referencia no cumple el formato");
	} else {
		return correcto(elemento);
	}
}

function validar_tipo_modelo() {
	let elemento = document.getElementById("tipo_modelo");
	if (elemento.value === "0") {
		return error(elemento, "El campo tipo_modelo no puede ser vacío");
	} else {
		return correcto(elemento);
	}
}

function validar_password() {
	let elemento = document.getElementById("password");
	if (elemento.value === "") {
		return error(elemento, "El campo password no puede ser vacío");
	} else if (/^#[a-z]{2}\w{8,16}[^a-zA-Z0-9&][379]{3}$/.test(elemento.value) == false) {
		return error(elemento, "El campo password no cumple el formato");
	}
	return correcto(elemento);
}

function correcto(campo) {
	let error = document.getElementById("errores");
	campo.className = "correcto";
	error.innerHTML = "";
	return true;
}

function error(campo, mensaje) {
	let error = document.getElementById("errores");
	campo.className = "error";
	campo.focus();
	error.innerHTML = mensaje;
	return false;
}
