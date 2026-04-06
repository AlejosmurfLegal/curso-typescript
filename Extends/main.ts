let nombre: string = "Manuel Alejandro Vega Riveros";
console.log(nombre.length);

function obtenerLongitud<T extends { length: number }>(arg: T): number {
  let longitud: number = arg.length;
  let tipo: string = typeof arg;
  console.log(`El tipo de datos es: ${tipo} y la longitud es: ${longitud}`);
  return arg.length;
}

console.log(obtenerLongitud(nombre));
console.log(obtenerLongitud([1, 2, 3, 4, 5]));

// console.log(obtenerLongitud(54321));