/*
  Los métodos get y set se utilizan para asignar y extraer atributos de un objeto.
  Es muy importante tener en cuenta que el nombre de los getters/setters no puede ser
  el mismo que la propiedad porque se produciría un bucle: al acceder a la propiedad
  invocaríamos al método que a su vez accede a la propiedad que invoca al método...
  Por ello, muchos desarrolladores utilizan el guión bajo para nombrar la propiedad.
*/
window.addEventListener(
  "load",
  function () {
    class Telefono {
      constructor(marca) {
        this.marca_del_modelo = marca;
      }
      get marca() {
        return this.marca_del_modelo;
      }
      set marca(mar) {
        this.marca_del_modelo = mar;
      }
    }
    let miTelefono = new Telefono("Google");
    miTelefono.marca = "iPhone";
    mensaje.innerHTML = "Mi telefono es un " + miTelefono.marca;
  },
  true
);
