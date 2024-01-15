// usar funções para diminuir a complexidade e tornar mais legível

function calcularImc(peso, altura){
    return peso / (altura * altura);
}

function classificarImc(imc){
    if (imc < 18.5) {
        return "Abaixo do peso";
    }
    else if (imc >= 18.5 && imc <= 24.9) {
        return "Peso normal";
    }
    else if (imc >= 25 && imc <= 29.9) {
        return "Acima do peso";
    }
    else if (imc >=305 && imc <= 39.9) {
        return "Obeso";
    }
    else {
        return "Obesidade grave";
    }
}

function main (){
    let altura = 1.65;
    let peso = 62;
    let imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
}

main()