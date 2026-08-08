const prompt = require("prompt-sync")();

let numero = Number(prompt("Digite seu número: "));

for (let divisao = 1; divisao <= 10; divisao++) {
    console.log(numero, "X", divisao, "=", numero * divisao)
    
}


