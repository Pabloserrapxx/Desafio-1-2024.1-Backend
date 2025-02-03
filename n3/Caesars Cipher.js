function rot13(src) {
    const arvoreCifras = {};
    for (let i = 0; i < 26; i++) {
      const letraOriginal = String.fromCharCode(65 + i); 
      const letraCifrada = String.fromCharCode(65 + ((i + 13) % 26));
      arvoreCifras[letraCifrada] = letraOriginal;  
    }
  
    let textoDecodificado = "";
    for (let i = 0; i < src.length; i++) {
      const caractere = src[i];
      if (arvoreCifras[caractere]) {
        textoDecodificado += arvoreCifras[caractere];
      } else {
        textoDecodificado += caractere; 
      }
    }
  
    return textoDecodificado;
  }
  
  rot13("SERR PBQR PNZC");