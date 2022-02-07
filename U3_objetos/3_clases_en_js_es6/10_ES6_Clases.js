/*
Las clases son una mejora sintáctica sobre la herencia 
basada en prototipos de JavaScript.
- Ofrecen una sintaxis más simple para crear objetos.
- No utiliza la palabra function, sino la palabra class.
- Las propiedades se asignan en un método constructor(), 
  no en la clase en sí.
*/

class Telefono {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
  }
}

let miTelefono = new Telefono("Google", "Pixel");
console.log(miTelefono.marca + " " + miTelefono.modelo);
