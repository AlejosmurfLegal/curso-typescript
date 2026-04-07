/*
  El mapped type de PersonaSoloLectura es:
  PersonaSoloLectura = {
    readonly name: string;
    readonly age: number;
  }
*/
var persona = {
    name: "Juan",
    age: 30,
};
console.log(persona.name);
function esNumero(valor) {
    return (typeof valor === "number");
}
var resultado1 = esNumero(42); // resultado1 es de tipo true
var resultado2 = esNumero("Hola"); // resultado2 es de tipo false
console.log(resultado1);
console.log(resultado2);
