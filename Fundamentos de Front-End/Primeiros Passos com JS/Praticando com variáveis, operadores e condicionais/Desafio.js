let notaUm = 6;
let notaDois = 7;
let notaTres = 8;

let mediaDaNota = (notaUm + notaDois + notaTres) / 3;

if (mediaDaNota < 5){
    console.log("Reprovado");
}
else if (mediaDaNota >= 5 && mediaDaNota <= 7) {
    console.log("Recuperação");
}
else {
    console.log("Passou de semestre");
}