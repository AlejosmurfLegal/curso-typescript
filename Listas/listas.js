var nombres = ["Juan", "María", "Pedro", "Ana"];
console.log("Nombres: ", nombres);
var edades = [25, 30, 22, 28];
console.log("Edades: ", edades);
var mixto = ["Manuel", 25, true];
console.log("Mixto: ", mixto);
var personas = [
    { nombre: "Carlos", edad: 35, desarrollador: true },
    { nombre: "Lucía", edad: 28, desarrollador: false },
    { nombre: "Sofía", edad: 22, desarrollador: true }
];
console.log("Personas: ", personas);
personas.push({ nombre: "Miguel", edad: 30, desarrollador: false });
console.log("Personas Actualizadas: ", personas);
// Tuplas
var personaTupla;
personaTupla = ["Laura", 27, true];
console.log("Persona Tupla: ", personaTupla);
var personasTupla = [];
personasTupla.push(["Andrés", 32, true]);
personasTupla.push(["Manuel", 25, true]);
personasTupla.push(["Camilo", 40, false]);
personasTupla.forEach(function (persona) {
    console.log("Persona en Tupla: ", persona);
    var nombre = persona[0];
    var edad = persona[1];
    var desarrollador = persona[2];
    console.log("Nombre: ", nombre);
    console.log("Edad: ", edad);
    console.log("Desarrollador: ", desarrollador);
});
//Enumeradores
var DiaDeLaSemana;
(function (DiaDeLaSemana) {
    DiaDeLaSemana[DiaDeLaSemana["Lunes"] = 0] = "Lunes";
    DiaDeLaSemana[DiaDeLaSemana["Martes"] = 1] = "Martes";
    DiaDeLaSemana[DiaDeLaSemana["Mi\u00E9rcoles"] = 2] = "Mi\u00E9rcoles";
    DiaDeLaSemana[DiaDeLaSemana["Jueves"] = 3] = "Jueves";
    DiaDeLaSemana[DiaDeLaSemana["Viernes"] = 4] = "Viernes";
    DiaDeLaSemana[DiaDeLaSemana["S\u00E1bado"] = 5] = "S\u00E1bado";
    DiaDeLaSemana[DiaDeLaSemana["Domingo"] = 6] = "Domingo";
})(DiaDeLaSemana || (DiaDeLaSemana = {}));
var dia = DiaDeLaSemana.Miércoles;
console.log("Día de la Semana: ", dia);
console.log("Día de la Semana (Nombre): ", DiaDeLaSemana[dia]);
