function ordemDecrescente() {

   var input = prompt("Digite 4 números separados por espaços:");

   var numeros = input.split(' ').map(function(num) {
       return parseInt(num);
   });

   numeros.sort(function(a, b) {
       return b - a;
   });

   var ordemDecrescenteString = numeros.join(', ');

   alert("A ordem decrescente é: " + ordemDecrescenteString);

}