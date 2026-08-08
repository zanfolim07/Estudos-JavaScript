const idadeVinny = 36
const minhaIdade = 36

//operador de igualdade (==)
// const comparacao = idadeVinny == minhaIdade


//maior que  (>)
// const comparacao = idadeVinny > minhaIdade

//menor que (<)
// const comparacao = idadeVinny < minhaIdade

const comparacao = idadeVinny < minhaIdade

console.log('São iguais?', comparacao)

const idade = 36
const idadeIrmao = 16 

const souMaiorDeIdade = idade >= 18
const irmaoMaiorDeIdade = idadeIrmao >= 18

console.log('sou maior de idade? ', souMaiorDeIdade)
console.log('meu irmao é maior de idade? ', irmaoMaiorDeIdade)

// Comparacao estrita
//no caso se a const for uma stringe um numero vai dar falso e se for duas strings e dois numeros vai dar true,
// os === 3 iguais força ele dar o resultado certo somente == ele da true 
const comparacaoEstrita = minhaIdade === idadeVinny
console.log('sao estritamente iguais? ', comparacaoEstrita)