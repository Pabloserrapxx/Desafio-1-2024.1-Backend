function converterParaRomano(numero) {
  const Romano = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let resultado = "";
  const fila = Object.keys(Romano);

  while (numero > 0) {
    const simbolo = fila.shift();
    const valor = Romano[simbolo];

    while (numero >= valor) {
      resultado += simbolo;
      numero -= valor;
    }
    if (fila.length > 0) {
      fila.push(simbolo);
    }
  }

  return resultado;
}

console.log(converterParaRomano(36)); 
