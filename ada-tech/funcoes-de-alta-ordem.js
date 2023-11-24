function welcome (couseName) {

    return (studenNome) => {
        console.log (
            `Ola, ${studenNome}! Seja Bem vindo (a) curso de ${couseName}`);
    }
}

const displayWelcomeToFronteEndCouse = welcome('front-end em react')

displayWelcomeToFronteEndCouse("Luis Eduardo")
console.clear()

const somar = (num1, num2) => num1 + num2;
const subtrair = (num1, num2) => num1 - num2;
const multiplicar = (num1, num2) => num1 * num2;
const dividir = (num1, num2) => num1 / num2;


const calcular = (num1, num2, funcaoDaOperacao) => funcaoDaOperacao(num1, num2)


const retorno = calcular(10, 5, somar );

console.log (retorno)


const resultado = calcular(10, 5, (num1, num2)=> num1 * num2 + 2 * num1 * num2);

console.log (resultado)