function mostrarPrecoPicolé() {

    alert(`Escolha o sabor do picolé:
    a. Chocolate - R$ 1,50
    b. Morango - R$ 2,50
    c. Creme - R$ 2,50
    d. Manga - R$ 3,20
    e. Melancia - R$ 3,40
    f. Vanilla Ice - R$ 3,00
    g. Céu Azul - R$ 3,60
    h. Brownie - R$ 4,00
    i. Hawaiano - R$ 5,00`);

    let opcao = prompt("Digite a letra correspondente ao sabor escolhido:");

    switch (opcao.toLowerCase()) {
        case 'a':
            alert("Você escolheu Chocolate. Preço: R$ 1,50");
            break;
        case 'b':
            alert("Você escolheu Morango. Preço: R$ 2,50");
            break;
        case 'c':
            alert("Você escolheu Creme. Preço: R$ 2,50");
            break;
        case 'd':
            alert("Você escolheu Manga. Preço: R$ 3,20");
            break;
        case 'e':
            alert("Você escolheu Melancia. Preço: R$ 3,40");
            break;
        case 'f':
            alert("Você escolheu Vanilla Ice. Preço: R$ 3,00");
            break;
        case 'g':
            alert("Você escolheu Céu Azul. Preço: R$ 3,60");
            break;
        case 'h':
            alert("Você escolheu Brownie. Preço: R$ 4,00");
            break;
        case 'i':
            alert("Você escolheu Hawaiano. Preço: R$ 5,00");
            break;
        default:
            alert("Opção inválida. Por favor, escolha uma opção válida.");
            break;
    }
}
