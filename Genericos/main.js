function identity(arg) {
    return arg;
}
var output1 = identity("Hello, Generics!");
console.log(output1);
var output2 = identity(42);
console.log(output2);
var Caja = /** @class */ (function () {
    function Caja(contenido) {
        this.contenido = contenido;
    }
    Caja.prototype.obtenerContenido = function () {
        return this.contenido;
    };
    return Caja;
}());
var cajaDeStrings = new Caja("Contenido de la caja");
console.log(cajaDeStrings.obtenerContenido());
var cajaDeNumeros = new Caja(12345);
console.log(cajaDeNumeros.obtenerContenido());
var par = {
    clave: "Edad",
    valor: 30,
};
console.log(par);
