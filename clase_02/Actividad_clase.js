const objetos = [
  {
    manzanas: 3,
    peras: 2,
    carne: 1,
    jugos: 5,
    dulces: 2,
  },
  {
    manzanas: 1,
    sandias: 1,
    huevos: 6,
    jugos: 1,
    panes: 4,
  },
];

let tiposDeProductos = [];

objetos.forEach((obj) => {
  Object.keys(obj).forEach((key) => {
    if (!tiposDeProductos.includes(key)) {
      tiposDeProductos.push(key);
    }
  });
});

console.log("Tipos de productos :", tiposDeProductos);

let totalVendidos = 0;

objetos.forEach((obj) => {
  const cantidades = Object.values(obj);
  cantidades.forEach((valor) => {
    totalVendidos += valor;
  });
});

console.log("Total de productos vendidos :", totalVendidos);
