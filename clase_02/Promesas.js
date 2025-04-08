const dividir = (a, b) => {
  return new Promise((resolve, reject) => {
    if (b === 0) reject("No se puede dividir por cero");
    else resolve(a / b);
  });
};

// dividir(10, 2)
//   .then((resultado) => console.log("Resultado :", resultado))
//   .catch((error) => console.log("Error :", error));

// dividir(10, 0)
//   .then((resultado) => console.log("Resultado :", resultado))
//   .catch((error) => console.log("Error :", error));

async function ejecutarDivision() {
  try {
    const resultado = await dividir(10, 2);
    console.log("Resultado Async :", resultado);
  } catch (error) {
    console.log("Error Async :", error);
  } finally {
    console.log("Finalizamos la ejecucion");
  }
}
ejecutarDivision();

const ejecutarDivisionFlecha = async () => {
  try {
    const resultado = await dividir(10, 3);
    console.log("Resultado Async Flecha :", resultado);
  } catch (error) {
    console.log("Error Async :", error);
  } finally {
    console.log("Finalizamos la ejecucion Flecha");
  }
};
ejecutarDivisionFlecha();
