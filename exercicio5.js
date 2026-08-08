const prompt = require("prompt-sync")();

let numeroDigitado = Number(prompt("Digite seu número: "));

while (numeroDigitado == 0 ) {
    console.log("Digite novamente")
    let novamente = Number(prompt("Digite seu número novamente: "));
} 