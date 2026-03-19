let nombres: string[] = ["Juan", "María", "Pedro", "Ana"];
console.log("Nombres: ", nombres);

let edades: number[] = [25, 30, 22, 28];
console.log("Edades: ", edades);

let mixto: any[] = ["Manuel", 25, true];
console.log("Mixto: ", mixto);

//Interface
interface Persona {
    nombre: string;
    edad: number;
    desarrollador: boolean;
}

let personas:Persona[] = [
    {nombre: "Carlos", edad: 35, desarrollador: true},
    {nombre: "Lucía", edad: 28, desarrollador: false},
    {nombre: "Sofía", edad: 22, desarrollador: true}
];

console.log("Personas: ", personas);

personas.push({nombre: "Miguel", edad: 30, desarrollador: false});

console.log("Personas Actualizadas: ", personas);

// Tuplas
let personaTupla: [string, number, boolean];
personaTupla = ["Laura", 27, true];

console.log("Persona Tupla: ", personaTupla);

let personasTupla: [string, number, boolean][] = [];

personasTupla.push(["Andrés", 32, true]);
personasTupla.push(["Manuel", 25, true]);
personasTupla.push(["Camilo", 40, false]);

personasTupla.forEach(persona => {
    console.log("Persona en Tupla: ", persona);

    let nombre: string = persona[0];
    let edad: number = persona[1];
    let desarrollador: boolean = persona[2];

    console.log("Nombre: ", nombre);
    console.log("Edad: ", edad);
    console.log("Desarrollador: ", desarrollador);
});

//Enumeradores
enum DiaDeLaSemana {
    Lunes,
    Martes,
    Miércoles,
    Jueves,
    Viernes,
    Sábado,
    Domingo
}

let dia: DiaDeLaSemana = DiaDeLaSemana.Miércoles;
console.log("Día de la Semana: ", dia);
console.log("Día de la Semana (Nombre): ", DiaDeLaSemana[dia]);