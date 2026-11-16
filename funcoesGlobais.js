function saudacao() {
    console.log('E ai, beleza?')
}

//setTimeout(saudacao, 2000) // milissegundos

let contador = 0

const id = setInterval(() => {
    contador ++
    console.log('Tempo decorrido (em segundos):', contador)

    if (contador == 10) {
        clearInterval(id) //limpa o intervalo do contador, ou seja, para de executar a função
    }

}, 1000)