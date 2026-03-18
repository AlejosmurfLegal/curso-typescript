let variablesAny: any;

variablesAny = "Hello";
variablesAny = 25;
variablesAny = true;

console.log(`Variable any: ${variablesAny}`); 

let variablesUnknown: unknown;

//variablesUnknown = "Hello";
variablesUnknown = 25;
// variablesUnknown = true;

if (typeof variablesUnknown === "string") {
    console.log(`Variable unknown: ${variablesUnknown}`);
}

// function throwError(message: string): never {
//     throw new Error(message);
// }

// throwError("Este es un mensaje de error");


function logMessage(message: string): void {
    console.log("Log message: "+ message);
}

logMessage("Este es un mensaje de log");