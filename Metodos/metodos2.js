function saludar(nombre, saludo) {
    if (saludo) {
        return "".concat(saludo, ", ").concat(nombre, "!");
    }
    else {
        return "Hola, ".concat(nombre, "!");
    }
}
console.log(saludar("Manuel"));
console.log(saludar("Manuel", "¡Buenos días!"));
//Parámetros Múltiples
function sumarTodos() {
    var numeros = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numeros[_i] = arguments[_i];
    }
    return numeros.reduce(function (acumulador, numero) { return acumulador + numero; }, 0);
}
console.log("Resultado: ", sumarTodos(1, 2, 3, 4, 5));
//Parámetros por defecto
function despedir(nombre, despedida) {
    if (despedida === void 0) { despedida = "Adiós"; }
    return "".concat(despedida, ", ").concat(nombre, "!");
}
console.log(despedir("Manuel"));
console.log(despedir("Manuel", "¡Hasta luego!"));
