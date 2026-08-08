const idade = 17

//if, se alguma coisa faz isso
//estrutura condicional simples, se a idade for maior ou igual a 18 exibe a mensagem
if(idade >= 18) {
    console.log("É maior de idade")
//else se nao 
} else {
    console.log("É menor de idade")
}

//se a idade for menor de 18 exibe a mensagem

// if(idade < 18) {
//     console.log('É menor de idade')
// }

// entre 9 e 10: excelente
// entre 7 e 8 bom 
// entre 4 e 6: medio 
// entre 0 e 3: ruim
//else if, se nao se-ou seja se nao for mior que nove ou igual é boa
const notaDoAluno = 3

if(notaDoAluno >= 9) {
    console.log("nota excelente")
} else if(notaDoAluno >= 7) {
    console.log("nota boa")
} else if(notaDoAluno >= 4) {
    console.log("nota mediana")
} else {
    console.log("nota ruim")
}
