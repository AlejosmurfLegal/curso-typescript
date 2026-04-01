interface Direccion {
  calle: string;
  numero: number;
  ciudad?: string;
}

let direccion: Direccion = {
  calle: "Calle Principal",
  numero: 123,
};

console.log("Dirección: ", direccion);