const idade = 18
const maiorDeIdade = idade >= 18
const possuiCNH = true
const podeDirigir = maiorDeIdade && possuiCNH // AND 

console.log('Pode Dirigit?', podeDirigir)

const podeViajarSozinha = maiorDeIdade || possuiCNH //OR

console.log('Pode viajar sozinha?', podeViajarSozinha)

// ! inverte a equação
const precisaDeAcompanhante = !maiorDeIdade
console.log('Precisa de acompanhante?', precisaDeAcompanhante)

//AND &&
//OR ||
//NOT !
