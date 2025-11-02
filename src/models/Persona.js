export class Persona {
  #id;
  #nombre;
  #apellido;
  #telefono;
  #idVehiculo;
  #idRol;
  #urlLicencia;

  constructor({ id, nombre, apellido, telefono, idVehiculo, idRol, urlLicencia }) {
    this.#id = id;
    this.#nombre = nombre;
    this.#apellido = apellido;
    this.#telefono = telefono;
    this.#idVehiculo = idVehiculo;
    this.#idRol = idRol;
    this.#urlLicencia = urlLicencia;
  }

  get id() {
    return this.#id;
  }

  set id(id) {
    this.#id = id;
  }

  get nombre() {
    return this.#nombre;
  }

  set nombre(nombre) {
    this.#nombre = nombre;
  }

  get apellido() {
    return this.#apellido;
  }

  set apellido(apellido) {
    this.#apellido = apellido;
  }

  get telefono() {
    return this.#telefono;
  }

  set telefono(telefono) {
    this.#telefono = telefono;
  }

  get idVehiculo() {
    return this.#idVehiculo;
  }

  set idVehiculo(idVehiculo) {
    this.#idVehiculo = idVehiculo;
  }

  get idRol() {
    return this.#idRol;
  }

  set idRol(idRol) {
    this.#idRol = idRol;
  }

  get urlLicencia() {
    return this.#urlLicencia;
  }

  set urlLicencia(urlLicencia) {
    this.#urlLicencia = urlLicencia;
  }
}
