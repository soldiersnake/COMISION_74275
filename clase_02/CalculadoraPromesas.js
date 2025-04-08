function suma(a, b) {
  return new Promise((resolve, reject) => {
    if (a === 0 || b === 0) return reject("Operacion Innecesaria");
    const resultado = a + b;
    if (resultado < 0) return reject("Solo se Aceptan valores positivos");
    resolve(resultado);
  });
}

async function calculos() {
  try {
    const resultado = await suma(1, 8);
    // const resultado = await suma(0, 0);
    // const resultado = await suma(-90, -10);
    console.log("Resultado :", resultado);
  } catch (error) {
    console.log("Error :", error);
  }
}

calculos();
