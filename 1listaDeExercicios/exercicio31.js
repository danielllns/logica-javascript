function numerosNegativos (vetorNumeros) {
    let qtdNegativos = 0;

    for (let i = 0; i < vetorNumeros.length; i++) {
        if (vetorNumeros[i] < 0) {
            qtdNegativos++
        }
    }

    return `Quantidade de negativos: ${qtdNegativos}`
}

let numerosTeste = [10, -5, 8, -2, -99, 23, 0, -1]
console.log(numerosNegativos(numerosTeste))