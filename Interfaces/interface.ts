interface Persona {
  nombre: string;
  edad: number;
  esDesarrollador: boolean;
}

let persona: Persona = {
  nombre: "Manuel",
  edad: 25,
  esDesarrollador: true,
};

console.log("Persona: ", persona);

let personas: Persona[] = [
  { nombre: "Manuel", edad: 25, esDesarrollador: true },
  { nombre: "Ana", edad: 30, esDesarrollador: false },
  { nombre: "Luis", edad: 28, esDesarrollador: true },
];

console.log("Personas: ", personas);

interface Sumar {
  (a: number, b: number): number;
}

let sumar: Sumar = (a: number, b:number):number => {
  return a + b;
}

console.log("Suma: ", sumar(5, 10));