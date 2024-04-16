function ordemDecrescente() {
    var num1 = 0;
    var num2 = 0;
    var num3 = 0;
    var num4 = 0;
    var matriz = 0;

    num1 = parseInt(prompt("Digite um numero:"));
    num2 = parseInt(prompt("Digite outro numero:"));
    num3 = parseInt(prompt("Digite outro numero:"));
    num4 = parseInt(prompt("Digite outro numero:"));

    matriz = sort([num1],[num2],[num3],[num4]);
    

    alert("A ordem decrescente é :" + matriz);


}