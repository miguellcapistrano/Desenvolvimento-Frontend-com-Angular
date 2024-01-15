/*
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta
e a escolha da condição de pagamento. |
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculoadequado.
Código Condição de pagamento:

1-  À vista Débito, recebe 10% de desconto;
2- À vista no Dinheiro ou PIX, recebe 15% de desconto;
3- Em duas vezes, preço normal de etiqueta sem juros;
4- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

let precoDoProduto = 22.9
let condicaoDePagamento = 1

if (condicaoDePagamento === 1) {
    let precoFinal = precoDoProduto - (precoDoProduto * 0.10)
    console.log("Total à pagar: " + precoFinal.toFixed(2))
}
else if (condicaoDePagamento === 2) {
    let precoFinal = precoDoProduto - (precoDoProduto * 0.15)
    console.log("Total à pagar: " + precoFinal.toFixed(2))
}
else if (condicaoDePagamento === 3) {
    console.log("Total à pagar: " + precoDoProduto)
}
else {
    let precoFinal = precoDoProduto + (precoDoProduto * 0.1)
    console.log("Total à pagar: " + precoFinal.toFixed(2))
}
