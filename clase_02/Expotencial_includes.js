// expotencial
// console.log("Elevamos a cuadrado :", 2 ** 2);
// console.log("Elevamos a al cubo :", 2 ** 3);

// console.log("Elevamos al cuadrado con Math :", Math.pow(2, 2));
// console.log("Elevamos al cubo con Math :", Math.pow(2, 3));

// metodo Inlude
const numeros = [1, 2, 3, 4, 5];
// console.log(numeros.includes(99));

// nullish
// let nombre = "Maria";
// console.log(nombre ?? "Sin nombre");
// console.log(typeof nombre);

const persona = { nombre: "Gohan", edad: 28 };
// console.log("Object.entries(persona): ", Object.entries(persona));
// console.log("Object.keys(persona) :", Object.keys(persona));
// console.log("Object.values(persona) :", Object.values(persona));

const producto = { id: 1, nombre: "Mouse" };
const nuevoProducto = { ...producto, precio: 25 };
console.log("nuevoProducto :", nuevoProducto);
console.log("Antiguo producto :", producto);
const { id, nombre } = producto;
console.log("Solo tomamos el nombre del producto :", nombre);
console.log("Solo tomamos el ID del producto :", id);
