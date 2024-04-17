function parImpar() {
    let numero = parseInt(prompt("Digite um numero par que eu o transformarei em impar e assim vice verse: "));

if(isNaN(numero)) {
    alert("Por favor digite um numero valido.");
    return;
}
    if (numero % 2 === 0) {
        numero = numero +1;
        alert(`O número ${numero - 1} é par. Transformado em ímpar: ${numero}`);
    } else {
        numero = numero - 1;
        alert(`O número ${numero + 1} é impar. Transformado em par: ${numero}`);
    }
}