class pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc(){
        return this.peso / (this.altura * this.altura);
    }
    classificarImc(){
        const imc = this.calcularImc();
        if (imc < 18.5) {
            return ("Abaixo do peso")
        }
        else if (imc >= 18.5 && imc <= 24.9) {
            return ("Peso normal")
        }
        else if (imc >= 25 && imc <= 29.9) {
            return ("Acima do peso")
        }
        else if (imc >=305 && imc <= 39.9) {
            return ("Obeso")
        }
        else {
            return ("Obesidade grave")
        }
    }
}

const jose = new pessoa('José', 70, 1.75);
console.log(jose.classificarImc());