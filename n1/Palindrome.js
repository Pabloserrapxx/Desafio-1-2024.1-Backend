function palindrome(str) {
  
    const strLimpa = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const pilha = [];
    const metade = Math.floor(strLimpa.length / 2);
  
    for (let i = 0; i < metade; i++) {
      pilha.push(strLimpa[i]);
    }
  
    let inicioSegundaMetade = strLimpa.length % 2 === 0 ? metade : metade + 1;
  
    for (let i = inicioSegundaMetade; i < strLimpa.length; i++) {
      if (pilha.length === 0 || strLimpa[i] !== pilha.pop()) {
        return false; 
      }
    }
    return pilha.length === 0;
  }
  
  palindrome("eye");