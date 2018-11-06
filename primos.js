 
 
 
// Crie uma função chamada "primos" que recebe um número como parâmetro e retorna um array com todos os números primos até o número. Regras que devem ser respeitadas:
// 1. Número primo é um número natural, maior que 1, apenas divisível por si próprio e pela unidade
// 2. Se a função receber 0 ou 1 deve lançar um erro
// 3. Deve retornar todos os números primos em ordem decrescente
 
 
 
 function primos(n) {
  var cont=0;

    if (n == 0 || n == 1){

      throw "o número deve ser maior que 2";

    }else{

      for(let i=n; i>=1; i--){
        for(let j=i; j>=1; j--){
          //se for decimal
          if((i/j)%1 == 0){
            cont++;
          }
        }

        if(cont==2){
          console.log(i);
        }
        cont = 0;
      }
    }
  }
  
