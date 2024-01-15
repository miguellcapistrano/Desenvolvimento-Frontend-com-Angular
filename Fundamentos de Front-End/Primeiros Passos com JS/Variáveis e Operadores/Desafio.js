//definir o gasto  em dinheiro para combustível para a viagem usando 3 variáveis
//preço do combustível, quantos km por litro, e a distância da viagem.

let precoCombustivel = 5.59
let kmPorLitro = 3
let distanciaDaViagem = 100

let gastoFinal = distanciaDaViagem / kmPorLitro * precoCombustivel

console.log(`O valor do combustível para a viagem será de ${gastoFinal.toFixed(2)} reais`)

