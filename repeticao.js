const input = require('readline-sync')

const numeroS = 5;


let numero = Number (input.question('Qual numero voce escolhe?'))

console.log(numero, typeof numero)

while (numero !== numeroS){
    console.log('Voce errou o numero tente novamente ')

    numero = Number (input.question('Qual numero voce escolhe?'))
}

console.log('Voce acertou')