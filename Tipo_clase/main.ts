import { Empleado } from "./empleado";

let empleado = new Empleado("Manuel", 25, true, "Desarrollador");

console.log(empleado.saludar());
console.log(empleado.obtenerInfo());

console.log("Nombre: ", empleado.nombre);