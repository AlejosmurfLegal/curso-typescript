export class Persona {
  public nombre: string; //Public: accesible desde cualquier parte del código
  protected edad: number; //Protected: accesible dentro de la clase y sus subclases
  private esDesarrollador: boolean; //Private: accesible solo dentro de la clase

  constructor(nombre: string, edad: number, esDesarrollador: boolean) {
    this.nombre = nombre;
    this.edad = edad;
    this.esDesarrollador = esDesarrollador;
  }

  public saludar(): string { //Public method
    this.esDev(); //Accediendo al método privado dentro de la clase
    return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
  }

  protected obtenerEdad(): number { //Protected method
    return this.edad;
  }

  private esDev(): boolean { //Private method
    return this.esDesarrollador;
  }
}

