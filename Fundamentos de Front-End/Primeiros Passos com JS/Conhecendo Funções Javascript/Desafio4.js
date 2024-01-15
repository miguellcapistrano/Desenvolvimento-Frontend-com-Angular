/*
Usar funções nesse exercício

1-  À vista Débito, recebe 10% de desconto;
2- À vista no Dinheiro ou PIX, recebe 15% de desconto;
3- Em duas vezes, preço normal de etiqueta sem juros;
4- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/


function aplicarDesconto(valor, desconto){
    return valor - (valor * (desconto / 100));
}

function aplicarJuros(valor, juros){
    return valor + (valor *(juros / 100));
}

function pagarValorTotal(){
    if (condicaoDePagamento === 1) {
        console.log("Total à pagar: " + aplicarDesconto(precoDoProduto, 10));
    }
    else if (condicaoDePagamento === 2) {
        console.log("Total à pagar: " + aplicarDesconto(precoDoProduto, 15));
    }
    else if (condicaoDePagamento === 3) {
        console.log("Total à pagar: " + precoDoProduto);
    }
    else {
        console.log("Total à pagar: " + aplicarJuros(precoDoProduto, 10));
    }
}

let precoDoProduto = 25
let condicaoDePagamento = 1

pagarValorTotal()

