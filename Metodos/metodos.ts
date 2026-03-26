function imprimirMensaje(mensaje: string): void {
    console.log("Mensaje: ", mensaje);
}

imprimirMensaje("¡Hola, TypeScript!");

function sumar(num1: number, num2: number): number {
    return num1 + num2;
}

let resultado = sumar(5, 3);
console.log("Resultado: ", resultado);