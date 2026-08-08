// contar quantos numeres pares e quantos numeros impares entre 0 e 100

let totalNumerosPares = 0
let totalNumerosImpares = 0

//laco de repeticao

//REPETICAO COM FOR

for (let contador = 0; contador <= 100; contador++) {
    if (contador % 2 == 0) {
        totalNumerosPares++
    } else {
        totalNumerosImpares++
    }
    
}

console.log("Total de numeros pares: ", totalNumerosPares)
console.log("Total de numeros impares: ", totalNumerosImpares)



//REPETICAO COM WHILE

// while (numero <=100 ) {

//     if (numero % 2 == 0) {
//         totalNumerosPares++
//     } else {
//         totalNumerosImpares++
//     }

//     numero++;
// }

// console.log("Quantidade de números pares:", totalNumerosPares);
// console.log("Quantidade de números ímpares:", totalNumerosImpares);