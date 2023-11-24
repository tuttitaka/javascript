

const numero = 10;


console.log(numero == 10)
console.log(numero > 20)

console.log(numero === '10')
console.log(numero == '10') 

console.clear()


console.log ( 10 != 10)
console.log ( 10 != '10')
console.log ( 10 !== '10')


let idade = 20;
let tenho = true;

const possoDirigir =  idade >= 18 && tenho === true;

console.log('Posso Dirigir?', possoDirigir);

idade = 40;

const voto = idade < 18 || idade > 70

const curso = false;

console.log(!curso)