const readline = require('readline') // importando o modulo readline, uma funcao global

const leitor = readline.createInterface({ // criando a interface de leitura
    input: process.stdin, // entrada
    output: process.stdout  // saida
})

leitor.question('Qual é seu nome? ', (nome) => { // pergunta para o usuario e recebe a resposta na variavel nome
    console.log('Ola', nome)
    console.log('Boas vindas ao nosso sistema!')

    leitor.question('Qual é sua idade? ', (idade) => {
        if ( idade >= 18) {
            console.log('Uau! Você jápode tiurar a sua CNH')
        }else {
            console.log('Você ainda não pode tirar a sua CNH!')
        }

        leitor.close() // fechando a interface de leitura
    })
    
})