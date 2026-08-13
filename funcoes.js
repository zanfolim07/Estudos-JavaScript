// function saudacao (nome) { //nome é um parametro da função saudacao
//     console.log('Ola,', nome)
// }

// const saudacao = (nome) => {
//     console.log('Vida longa e prospera,', nome)
// }

const saudacao = nome => console.log('ola,', nome)
saudacao("guilherme") // Guilherme é o "Argumento"

// function calcularDobroDeUm(numero) {
//     return numero * 2
// }

const calcularDobroDeUm = (numero) => {
    return numero * 2
}

const numeroDobrado = calcularDobroDeUm(4)
console.log("O dobro de 4 é:", numeroDobrado)
