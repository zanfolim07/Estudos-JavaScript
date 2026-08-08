//boas vindas personalizadas

let nome = "guilherme";
console.log("Olá,", nome, "seja bem-vindo ao curso de JavaScript");

//Cálculo de idade 
let anoAtual = 2026
let anoNascimento = 2008
let idade = anoAtual - anoNascimento

console.log('voce tem', idade, 'anos');

//mensagem de localizacao
let cidade = 'osasco'
let estado = 'sao paulo'
let pais = 'brasil'

console.log('voce esta em', cidade, '-', estado, ',', pais);


//tipo de variavel 
let temCarteira = "true ou false" 
console.log(typeof temCarteira) 

//simulaçao banca simples 
let saldoIniciando = 0
let deposito = 200
let saque = 50
let saldo = saldoIniciando + deposito - saque

console.log('saldo inicial:', saldoIniciando)
console.log('voce fez um deposito de:', deposito)
console.log('voce fez um saque de:', saque)
console.log('saldo:', saldo)


//medias de notas
let matematica = 10
let portugues = 7 
let ciencias = 8

let media = (matematica + portugues + ciencias) / 3

console.log('sua media final é: ', media)


//salario 

let salario = 3000

let aumento = salario * 0.10
let novoSalario = salario + aumento

console.log("Você recebeu um aumento de 10% por bom desempenho.")
console.log("Seu novo salário é ", novoSalario)