const readline = require('readline')

// 1. Função auxiliar simples para normalizar e validar cada resposta
function respostaEstaCorreta(respostaDigitada, gabarito) {
    if (!respostaDigitada) {
        return false
    }
    // Converte para maiúscula e remove espaços extras antes de comparar com ===
    const respostaFormatada = respostaDigitada.trim().toUpperCase()
    return respostaFormatada === gabarito
}

// 2. Função principal de lógica: recebe parâmetros, não usa variáveis globais e usa RETURN
function gerarResultadoQuiz(r1, r2, r3, r4, r5) {
    let acertos = 0

    if (respostaEstaCorreta(r1, 'B')) acertos++
    if (respostaEstaCorreta(r2, 'B')) acertos++
    if (respostaEstaCorreta(r3, 'A')) acertos++
    if (respostaEstaCorreta(r4, 'C')) acertos++
    if (respostaEstaCorreta(r5, 'C')) acertos++

    if (acertos === 5) {
        return 'Parabéns! Você conseguiu ' + acertos + ' acertos!'
    } else if (acertos >= 2) {
        return 'Muito bom! Continue assim! (' + acertos + ' acertos)'
    } else if (acertos === 1) {
        return 'Continue melhorando! (1 acerto)'
    } else {
        return 'Continue praticando e tente novamente!'
    }
}

// 3. Interface de leitura (apenas captura os dados e exibe o retorno)
const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

leitor.question('Qual é seu nome? ', (nome) => {
    console.log('Olá,', nome)
    console.log('Boas-vindas ao nosso sistema!')

    leitor.question('1. Qual palavra-chave é utilizada para declarar uma variável que pode ter seu valor alterado?\nA) const\nB) let\nC) function\nD) return\n> ', (resposta1) => {
        leitor.question('2. Qual é o resultado de 10 + 5 em JavaScript?\nA) 105\nB) 15\nC) 50\nD) 5\n> ', (resposta2) => {
            leitor.question('3. Qual comando é utilizado para exibir uma mensagem no console do navegador?\nA) console.log()\nB) document.write()\nC) alert()\nD) prompt()\n> ', (resposta3) => {
                leitor.question('4. Qual estrutura é utilizada para executar um bloco de código somente quando uma condição é verdadeira?\nA) for\nB) while\nC) if\nD) switch\n> ', (resposta4) => {
                    leitor.question('5. Qual tipo de dado representa um valor verdadeiro ou falso em JavaScript?\nA) String\nB) Number\nC) Boolean\nD) Array\n> ', (resposta5) => {
                        
                        // Chamada limpa passando parâmetros e imprimindo o return
                        console.log(gerarResultadoQuiz(resposta1, resposta2, resposta3, resposta4, resposta5))
                        
                        leitor.close()
                    })
                })
            })
        })
    })
})