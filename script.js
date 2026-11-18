 let ehPrimo = true;
 let num = +prompt('Digite um número:');
 for (let i = 3; i < num; i = i + 1) {
      if (num % i === 0) {
        ehPrimo = true;
    } 
    if (num === 2){
        ehPrimo = true;
    }
}
console.log(ehPrimo);
  

