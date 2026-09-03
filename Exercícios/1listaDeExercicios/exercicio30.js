function encontrarMaiorEMenor(vetorNumeros) {
    let maior = vetorNumeros[0]
    let menor = vetorNumeros[0]

    for (i = 1; i < vetorNumeros.length; i++) {
        if (vetorNumeros[i] > maior) {
            maior = vetorNumeros[i]
        }
        if (vetorNumeros[i] < menor) {
            menor = vetorNumeros[i]
        }
    }

    return `Maior valor: ${maior} | Menor: ${menor}` 
}

let numerosTeste = [10, 5, 8, 2, 99, 23, 1] 
console.log(encontrarMaiorEMenor(numerosTeste))