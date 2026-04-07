function PersonaDec(target: Function) {
  console.log(target);

  target.prototype.despedir = function (despedida: string): string {
    return `${despedida}, me llamo ${this.nombre} y tengo ${this.edad} años.`;
  };
}

@PersonaDec
class Persona2 {
  nombre: string;
  edad: number;

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar(saludo: string): string {
    return `${saludo}, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
  }

  despedir!: (despedida: string) => string;
}

let usuario2 = new Persona2("Juan", 30);
console.log(usuario2.saludar("Hola"));
console.log(usuario2.despedir("Adiós"));