function verificarIntervalo (vetorNumeros) {
    let dentroIntervalo = 0
    let foraIntervalo = 0
    for (i = 0; i <= vetorNumeros.length; i++) {
        if(vetorNumeros[i] >= 10 && vetorNumeros[i] <= 20) {
            dentroIntervalo++
        } else {
            foraIntervalo++
        }
    }
    return `Dentro do intervalo [10,20]: ${dentroIntervalo} | Fora: ${foraIntervalo}`
}

let numerosTeste = [7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]
console.log(verificarIntervalo(numerosTeste))