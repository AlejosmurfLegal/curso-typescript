interface Direccion {
  calle: string;
  numero: number;
  ciudad?: string;
}

let direccion: Direccion = {
  calle: "Calle Principal",
  numero: 123,
  ciudad: "Ciudad Ejemplo"
};

console.log("Dirección: ", direccion);

//Readonly Properties
interface Persona {
  readonly nombre: string;
  readonly edad: number;
  readonly esDesarrollador: boolean;
}

let persona: Persona = {
  nombre: "Manuel",
  edad: 25,
  esDesarrollador: true,
}

console.log("Persona: ", persona);

// persona.nombre = "Ana"; // Error: Cannot assign to 'nombre' because it is a read-only property.

//Interfaz extendida
interface Empleado extends Persona {
  readonly puesto: string;
}

let empleadoRead: Empleado = {
  nombre: "Manuel",
  edad: 25,
  esDesarrollador: true,
  puesto: "Desarrollador frontend"
}

console.log("Empleado: ", empleadoRead);