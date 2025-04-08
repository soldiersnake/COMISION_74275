function saludar(nombre, callback) {
  console.log(`Hola ${nombre}`);
  callback();
}

saludar("Picorro", () => {
  console.log("Esto se ejecuta despues del saludo");
});

function operar(a, b, callback) {
  return callback(a, b);
}

const sumar = (x, y) => x + y;
console.log(operar(5, 3, sumar));
