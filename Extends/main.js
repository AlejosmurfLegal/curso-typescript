var nombre = "Manuel Alejandro Vega Riveros";
console.log(nombre.length);
function obtenerLongitud(arg) {
    var longitud = arg.length;
    var tipo = typeof arg;
    console.log("El tipo de datos es: ".concat(tipo, " y la longitud es: ").concat(longitud));
    return arg.length;
}
console.log(obtenerLongitud(nombre));
console.log(obtenerLongitud([1, 2, 3, 4, 5]));
