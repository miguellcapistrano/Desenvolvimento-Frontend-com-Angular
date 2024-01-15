/* formula IMC = peso / (altura * altura)

Elabore um algoritmo que dado sua altura e peso, mostre sua condição de acordo com a tabela abaixo.

IMC em adultos:
- MENOR QUE 18,5 = abaixo do peso;
- ENTRE 18,5 E 24,9 = peso normal;
- ENTRE 25,0 E 29,9	= acima do peso;
- ENTRE 30,0 E 39,9	= obeso;
- MAIOR QUE 40,0 = obesidade grave; 
*/

let altura = 1.65;
let peso = 62;
let imc = peso / (altura * altura);
console.log(imc.toFixed(2))

if (imc < 18.5) {
    console.log("Abaixo do peso")
}
else if (imc >= 18.5 && imc <= 24.9) {
    console.log("Peso normal")
}
else if (imc >= 25 && imc <= 29.9) {
    console.log("Acima do peso")
}
else if (imc >=305 && imc <= 39.9) {
    console.log("Obeso")
}
else {
    console.log("Obesidade grave")
}