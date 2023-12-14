// calcular o valor da viagem
// 5 variáves:
// 1- preço do etanol;
// 2- preço da gasolina;
// 3- tipo do combustível do carro;
// 4- gasto médio de litro por KM;
// 5- distância em KM da viagem.
// imprima no console o valor que será gasto na viagem.

let precoEtanol = 4.75;
let precoGasolina = 5.68;
let kmPorLitro = 8;
let distancia = 300;
let combustivelDoCarro = "Etanol";

let litrosConsumidos = distancia / kmPorLitro

if (combustivelDoCarro === "Gasolina"){
    let valorDaViagem = litrosConsumidos * precoGasolina;
    console.log("O valor total da viagem será de " + valorDaViagem)
}
else if (combustivelDoCarro === "Etanol"){
    let valorDaViagem = litrosConsumidos * precoEtanol;
    console.log("O valor total da viagem será de " + valorDaViagem.toFixed(2))
}
   
