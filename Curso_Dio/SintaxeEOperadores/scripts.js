function comparadorDeNumeros(num1, num2){
    const primeiraFrase = criarPrimeiraFrase(num1, num2);
    const segundaFrase = criarSegundaFrase(num1, num2);    

    return `${primeiraFrase} ${segundaFrase}`


}

function criarPrimeiraFrase(num1, num2){
    let saoIguais = '';

    if(num1 !== num2){
        saoIguais = 'Não';
    }

    return `Os numeros ${num1} e ${num2} ${saoIguais} são iguais.`
}

function criarSegundaFrase(num1, num2){
    const soma = num1 + num2;

    let resultado10 = 'menor';
    let resultado20 = 'menor';
    const comparar10 = soma > 10;
    const comparar20 = soma > 20;

    if(comparar10){
        resultado10 = 'maior';
    }

    if(comparar20){
        resultado20 = 'maior';
    }

    return `Sua soma é ${soma}, que é ${resultado10} e ${resultado20}`
}
console.log(comparadorDeNumeros(10,10));