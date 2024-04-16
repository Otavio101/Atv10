function somarNumeros() {
    let soma = 0;
    let continuar = true;

    while(continuar) {
        let numero = parseFloat(prompt("Digite um numero (ou 0 para encerrar):"));

        if (!isNaN(numero)) {
            soma += numero;
        } else {
            alert("Um numero valido por favor:");
        }
        continuar = confirm("Você deseja colocar mais algum numero?:");
    }
    alert("A soma dos numeros é " + soma);
}