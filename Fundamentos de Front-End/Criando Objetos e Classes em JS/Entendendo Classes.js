class pessoa {
    name;
    age;
    anoDeNascimento;

    constructor(name,age){
        this.name = name;
        this.age = age;
        this.anoDeNascimento = 2024 - age;
    }

    descrever(){
        console.log(`Meu nome é ${this.name} e minha idade é ${this.age} anos.`)
    }
}

function compararPessoas(p1, p2){
    if (p1.age > p2.age){
        console.log(`${p1.name} é mais velho(a) que ${p2.name}`)
    }
    else if (p2.age > p1.age){
        console.log(`${p2.name} é mais velho(a) que ${p1.name}`)
    }
    else{
        console.log(`${p1.name} e ${p2.name} tem a mesma idade.`)
    }

}

const miguell = new pessoa("Miguell", 31);
const evandro = new pessoa("Evandro", 34)

compararPessoas(miguell, evandro);