type PersonaType = {
  name: string;
  age: number;
};

type Parcial<T> = {
  [K in keyof T]?: T[K];
};

type PersonaParcial = Parcial<PersonaType>;

/*
  El mapped type de PersonaParcial es:
  PersonaParcial = {
    name?: string;
    age?: number; 
  }
*/

type SoloLectura<T> = {
  readonly [K in keyof T]: T[K];
};

type PersonaSoloLectura = SoloLectura<PersonaType>;

/*
  El mapped type de PersonaSoloLectura es:
  PersonaSoloLectura = {
    readonly name: string;
    readonly age: number; 
  }
*/

let persona: PersonaSoloLectura = {
  name: "Juan",
  age: 30,
};

console.log(persona.name);

// Template Literal Types
type Variantes = "pequeño" | "mediano" | "grande";
type ClasesCSS = `boton-${Variantes}`;

// let botonPequeño: ClasesCSS = "boton-pequeño";
// let botonMediano: ClasesCSS = "boton-mediano";
// let botonGrande: ClasesCSS = "boton-grande";

// Conditional Types
type EsNumero<T> = T extends number ? true : false;

function esNumero<T>(valor: T): EsNumero<T> {
  return (typeof valor === "number") as EsNumero<T>;
}

const resultado1 = esNumero(42); // resultado1 es de tipo true
const resultado2 = esNumero("Hola"); // resultado2 es de tipo false

console.log(resultado1);
console.log(resultado2);