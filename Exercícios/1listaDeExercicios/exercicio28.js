function contarParesImpares(vetorNumeros) {
    let qtdPares = 0
    let qtdImpares = 0
    for (let i = 0; i < vetorNumeros.length; i++) {
        if (vetorNumeros[i] % 2 === 0 ) {
            qtdPares++
        } else {
            qtdImpares++
        }
    }
      return `Pares: ${qtdPares} | Ímpares: ${qtdImpares}`
}

let numerosParaTestar = [1, 2, 3, 4, 5, 6, 7, 10, 15, 17]

console.log(contarParesImpares(numerosParaTestar))