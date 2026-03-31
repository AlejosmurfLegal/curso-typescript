function saludar(nombre: string, saludo?: string): string {
    if (saludo){
        return `${saludo}, ${nombre}!`;
    }else{
        return `Hola, ${nombre}!`;
    }
}

console.log(saludar("Manuel"));
console.log(saludar("Manuel", "¡Buenos días!"));

//Parámetros Múltiples
function sumarTodos(...numeros: number[]): number {
    return numeros.reduce((acumulador, numero) => acumulador + numero, 0);
}

console.log("Resultado: ", sumarTodos(1, 2, 3, 4, 5));

//Parámetros por defecto
function despedir(nombre: string, despedida: string = "Adiós"): string {
    return `${despedida}, ${nombre}!`;
}

console.log(despedir("Manuel"));
console.log(despedir("Manuel", "¡Hasta luego!"));