function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("Hello, Generics!");
console.log(output1);

let output2 = identity<number>(42);
console.log(output2);

class Caja<T> {
  private contenido: T;

  constructor(contenido: T) {
    this.contenido = contenido;
  }

  public obtenerContenido(): T {
    return this.contenido;
  }
}

let cajaDeStrings = new Caja<string>("Contenido de la caja");
console.log(cajaDeStrings.obtenerContenido());

let cajaDeNumeros = new Caja<number>(12345);
console.log(cajaDeNumeros.obtenerContenido());

interface Par<K, V> {
  clave: K;
  valor: V;
}

let par: Par<string, number> = {
  clave: "Edad",
  valor: 30,
};  

console.log(par);