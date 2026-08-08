
//Estrutura do laco de repeticao FOR
for(let contador =1; contador <= 5; contador++) {
    console.log('Numero atual:', contador)
}

for(let numero = 0; numero <=15; numero++){
    if (numero%2 == 0) {
        console.log('Numero par encontrado: ', numero)
    }
}

for(let numero = 0; numero <=15; numero++){
    if (numero%2 > 0) {
        console.log('Numero Impar encontrado: ', numero)
    }
}

const palavra = 'calopsita'

//palavra.length indica quantos caracteres uma string possui
//palavras[1] - pega a letra na posicao indicada
for(let contador = 0; contador <= palavra.length; contador++){
    console.log(palavra[contador])
}